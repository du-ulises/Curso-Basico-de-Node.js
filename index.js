const readLine = require('readline')

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const questions = ['Cuál es tu nombre? ', 'Cuáles son tus apellidos? ', 'Cuál es tu edad? ']

const askQuestion = (rl, questions) => {
    return new Promise((resolve, reject) => {
        rl.question(questions, answer => {
            resolve(answer)
        })
    })
}

const ask = questions=>{
    return new Promise(async resolve =>{
        let results =[]
        for (let i = 0; i < questions.length; i++) {
            const result = await askQuestion(rl, questions[i])
            results.push(result)
        }
        rl.close()
        resolve(results)
    })
}

ask(questions)
    .then(questions=>{
        console.log(`Hola ${questions[0]} ${questions[1]} tu edad es la siguiente: ${questions[2]}`)
    })