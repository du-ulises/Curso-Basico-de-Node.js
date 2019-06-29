const cp = require('child_process')

function exectCommand(command) {
    cp.exec(command, (err, stdout, stderr)=>{
        if(err){
            console.log(`Error: ${err}`)
            return
        }
        //if(err) throw err
        if(stdout) console.log(`Standard out: \n${stdout}`)
        if(stderr) console.log(`Standard err: \n${stderr}`)
    })
}
//exectCommand('ls')
exectCommand('node ./src/script --base=5')