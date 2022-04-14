const question = require('./question')
const fs = require('fs')

fs.writeFileSync("question.json",JSON.stringify({questions:[]}))
const questionsJson = JSON.parse(fs.readFileSync("question.json"))

questionsJson.questions.push(question())

fs.writeFileSync("question.json", JSON.stringify(questionsJson))