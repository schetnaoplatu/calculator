// CREDIT CALCULATOR

function calculateLoan(){

let amount = document.getElementById("amount").value
let rate = document.getElementById("rate").value / 100 / 12
let months = document.getElementById("months").value

let payment = (amount * rate) / (1 - Math.pow(1 + rate, -months))

document.getElementById("result").innerHTML =
"Ежемесячный платеж: " + payment.toFixed(2)

}


// DISCOUNT CALCULATOR

function calculateDiscount(){

let price = document.getElementById("price").value
let discount = document.getElementById("discount").value

let result = price - (price * discount / 100)

document.getElementById("result").innerHTML =
"Цена со скидкой: " + result

}


// AGE CALCULATOR

function calculateAge(){

let birth = new Date(document.getElementById("birth").value)
let today = new Date()

let age = today.getFullYear() - birth.getFullYear()

document.getElementById("result").innerHTML =
"Ваш возраст: " + age

}


// PASSWORD GENERATOR

function generatePassword(){

let chars =
"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

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
"Количество слов: " + words

}


// RANDOM NUMBER

function randomNumber(){

let min = document.getElementById("min").value
let max = document.getElementById("max").value

let number = Math.floor(Math.random() * (max - min + 1)) + Number(min)

document.getElementById("result").innerHTML =
"Случайное число: " + number

}


// BMI CALCULATOR

function calculateBMI(){

let weight = document.getElementById("weight").value
let height = document.getElementById("height").value / 100

let bmi = weight / (height * height)

document.getElementById("result").innerHTML =
"BMI: " + bmi.toFixed(2)

}


// CURRENCY CONVERTER (simple)

function convertCurrency(){

let amount = document.getElementById("amount").value
let rate = document.getElementById("rate").value

let result = amount * rate

document.getElementById("result").innerHTML =
"Результат: " + result

}
