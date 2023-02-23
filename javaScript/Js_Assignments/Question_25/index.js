// 25. Body mass index(BMI) is calculated as follows: 
//     bmi = weight in Kg / (height x height) in m2. 
//     Write a function which calculates bmi. BMI is used to broadly define different weight 
//     groups in adults 20 years old or older.Check if a person is underweight, normal, 
//     overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more
window.onload = () => {
    let button = document.querySelector("#btn");

    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};
function calculateBMI() {
    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)
    let result = document.querySelector('#result')
    let bmi = weight / (height) * 2

    if (height === '' || isNaN(height)) {
        result.innerHTML = 'Provide a valid height';

    } else if (weight === '' || isNaN(weight)) {
        result.innerHTML = 'Provide a valid weight';
    } else {

        if (bmi < 18.5) {
            result.innerHTML = `Underweight : <span>${bmi}</span>`;

        } else if (bmi >= 18.5 && bmi < 24.9) {
            result.innerHTML = `Normal Weight : <span>${bmi}</span>`;

        } else if (bmi >= 25 && bmi < 29.9) {
            result.innerHTML = `Overweight: <span>${bmi}</span>`
        } else {
            result.innerHTML = `Obese: <span>${bmi}</span>`
        }
    }

}
