const form = document.querySelector('form')
form.addEventListener("submit", function (a) {
    a.preventDefault();

   const height = parseInt(document.querySelector('#height').value);
   const weight = parseInt(document.querySelector('#Weight').value);
   const result = document.querySelector('#results');

   if(height === '' || height <= 0 || isNaN(height)) {
  result.innerHTML = `Please give a valid height ${height}`;
  } else if(weight === '' || weight <= 0 || isNaN(weight)) {
  result.innerHTML = `Please give a valid weight ${weight}`;
   }else {
    const BMI = ((weight/((height*height)/1000)).toFixed(2))
    result.innerHTML = `<span>${BMI}</span>`

    let category = '';
    if(BMI < 18.5){
        category = 'is underweight';
    } else if (BMI >= 18.5 && BMI < 24.9) {
        category = 'Normal weight';
    } else if (BMI >= 25) {
        category = 'Overweight';
    }
    result.innerHTML = `<span>BMI: ${BMI} ${category})</span>`;
   }

});