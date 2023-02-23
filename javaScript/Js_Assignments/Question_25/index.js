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
    let button = document.querySelector('#btn')
    button.addEventListener('click', calculateBMI)

    function calculateBMI() {
        let height = document.querySelector('#height').value
        let weight = document.querySelector('#weight').value
        let result = document.querySelector('#result')

        let bmi = (weight / (height) * 2).toFixed(2)

        if (height === '' || isNaN(height)) {
            result.innerHTML = 'Height is empty, please try again'
        } else if (weight === '' || isNaN(weight)) {
            result.innerHTML = 'Weight is empty, please try again'
        }

        if (bmi < 18.5) {
            result.innerHTML = `You are Underweight 😞 : <span>${bmi}</span>`
        } else if (bmi >= 18.5 && bmi < 24.9) {
            result.innerHTML = `Your weight is Normal ☺️ : <span>${bmi}</span>`
        } else if (bmi > 25 && bmi <= 24.9) {
            result.innerHTML = `You are overweight ☹️ : <span>${bmi}</span>`

        } else {
            result.innerHTML = `Your weight is Obese 😫 : <span>${bmi}</span>`

        }
    }
}