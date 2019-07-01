const MongoClient = require('mongodb').MongoClient;
const { DB_HOST, DB_PORT, DB_NAME } = require("./config");
//const connectionUrl = `mongodb://${DB_HOST}:${DB_PORT}`; 
const connectionUrl = "mongodb+srv://platzi-admin:4BBr8qNTNYsVUtRx@curso-platzi-4qbc7.mongodb.net"

module.exports = (()=>{
    let instance = null,
        isDisconnecting = false;

    function connect() {
        return new Promise((resolve, reject)=>{
            MongoClient.connect(connectionUrl, { useNewUrlParser: true }, function(err, client) {
                if (err) { reject(err); }
                console.log("Conectado satisfactoriamente al servidor de Mongo!");
                instance = client;
                resolve(client.db(DB_NAME));
            });
        });
    }

    function disconnect(){
        if (instance && !isDisconnecting){
            isDisconnecting = true;
            console.log("Desconectando instancia de Mongo");
            return new Promise((resolve, reject)=>{
                instance.close((err, result)=>{
                    if (err) { reject(err); isDisconnecting=false; return; }
                    console.log("Instancia de Mongo desconectada!");
                    resolve();
                });
            })
        }
    }

    return {
        connect,
        disconnect,
        instance
    }
})();