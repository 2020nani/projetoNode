require('dotenv').config()
const calcula =  require('./util/calcula')
const dividir = require('./util/dividi')
let number1 = process.env.ALG_1
let number2 = process.env.ALG_2
let number3 = process.env.ALG_3
let number4 = process.env.ALG_4

console.log(calcula(parseInt(number1),parseInt(number2)))
console.log(dividir(number3,number4))