// CREDIT CALCULATOR

function calculateCredit(){

let amount = document.getElementById("amount").value
let rate = document.getElementById("rate").value / 100 / 12
let months = document.getElementById("months").value

let payment = (amount * rate) / (1 - Math.pow(1 + rate, -months))

document.getElementById("result").innerHTML =
"Ежемесячный платеж: " + payment.toFixed(2)

}


// LOAN CALCULATOR

function calculateLoan(){

let amount = document.getElementById("loanAmount").value
let rate = document.getElementById("loanRate").value
let years = document.getElementById("loanYears").value

let total = amount * (1 + (rate/100) * years)

document.getElementById("result").innerHTML =
"Общая сумма: " + total

}


// DISCOUNT CALCULATOR

function calculateDiscount(){

let price = document.getElementById("price").value
let discount = document.getElementById("discount").value

let final = price - (price * discount / 100)

document.getElementById("result").innerHTML =
"Цена со скидкой: " + final

}


// PERCENTAGE CALCULATOR

function calculatePercentage(){

let number = document.getElementById("number").value
let percent = document.getElementById("percent").value

let result = number * percent / 100

document.getElementById("result").innerHTML =
result

}


// AGE CALCULATOR

function calculateAge(){

let birth = new Date(document.getElementById("birth").value)
let today = new Date()

let age = today.getFullYear() - birth.getFullYear()

document.getElementById("result").innerHTML =
"Возраст: " + age

}


// BMI

function calculateBMI(){

let weight = document.getElementById("weight").value
let height = document.getElementById("height").value / 100

let bmi = weight / (height * height)

document.getElementById("result").innerHTML =
"BMI: " + bmi.toFixed(2)

}


// RANDOM NUMBER

function randomNumber(){

let min = parseInt(document.getElementById("min").value)
let max = parseInt(document.getElementById("max").value)

let number = Math.floor(Math.random() * (max - min + 1)) + min

document.getElementById("result").innerHTML =
number

}


// PASSWORD GENERATOR

function generatePassword(){

let chars =
"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%"

let password = ""

for(let i=0;i<12;i++){

password += chars.charAt(Math.floor(Math.random()*chars.length))

}

document.getElementById("result").innerHTML = password

}


// WORD COUNTER

function countWords(){

let text = document.getElementById("text").value

let words = text.trim().split(/\s+/).length

document.getElementById("result").innerHTML =
"Слов: " + words

}


// TEXT CASE

function toUpper(){

let text = document.getElementById("text").value

document.getElementById("result").innerHTML =
text.toUpperCase()

}

function toLower(){

let text = document.getElementById("text").value

document.getElementById("result").innerHTML =
text.toLowerCase()

}


// BASE64

function encodeBase64(){

let text = document.getElementById("text").value

document.getElementById("result").innerHTML =
btoa(text)

}

function decodeBase64(){

let text = document.getElementById("text").value

document.getElementById("result").innerHTML =
atob(text)

}


// MD5 (simple placeholder)

function generateMD5(){

let text = document.getElementById("text").value

let hash = 0

for (let i = 0; i < text.length; i++) {

hash = ((hash<<5)-hash)+text.charCodeAt(i)

hash = hash & hash

}

document.getElementById("result").innerHTML = hash

}


// VAT

function calculateVAT(){

let price = document.getElementById("price").value
let vat = document.getElementById("vat").value

let total = price * (1 + vat/100)

document.getElementById("result").innerHTML =
"Цена с НДС: " + total

}


// UNIT CONVERTER

function convertUnit(){

let value = document.getElementById("value").value

let result = value * 1000

document.getElementById("result").innerHTML =
result + " meters"

}


// TIME CALCULATOR

function calculateTime(){

let h = document.getElementById("hours").value
let m = document.getElementById("minutes").value

let total = parseInt(h)*60 + parseInt(m)

document.getElementById("result").innerHTML =
total + " minutes"

}
