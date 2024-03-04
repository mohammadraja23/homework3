//alert("hey, this is a calculator which can calculate your BMI")
function calculateBMI() {
    var heightInput = document.querySelector(".height-input")
    var weightInput = document.querySelector(".weight-input")
    var calculateButton = document.querySelector(".calculate") //it looks it's wrong.
    var result = document.querySelector(".result")
    var statement = document.querySelector(".result-statement")
    var BMI,height,weight;

    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height**2);
    result.innerText = BMI;
    if (BMI<18.5) {
        statement.innerText = "یه تیکه استخون متحرک"
    }
    else if (BMI > 18.5 && BMI <= 25) {
        statement.innerText = "خوب است"
    }
    else if (BMI > 25 && BMI < 30) {
        statement.innerText = "!چاقی"
    }
    else {
        statement.innerText = "!مشکوک میزنی"
    }
;}