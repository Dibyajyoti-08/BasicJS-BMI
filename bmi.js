
function bmiCalculator(weight, height){
    var bmi = Math.floor(weight / (height * height));
    return bmi;
}

bmiCalculator(78, 1.73);