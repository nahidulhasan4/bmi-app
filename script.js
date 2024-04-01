function cmToFeetInches(cm) {
    const inches = cm / 2.54;
    const feet = Math.floor(inches / 12);
    const remainingInches = Math.round(inches % 12);
    return `${feet} feet ${remainingInches} inches`;
}

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
   e.preventDefault();
   const height = parseInt(document.querySelector('#height').value);
   const weight = parseInt(document.querySelector('#weight').value);
   const result = document.querySelector('#results');

   if (height === "" || height < 0 || isNaN( height )) {
    result.innerHTML = `Please give a valid height ${height}`;
   }else if(weight === "" || isNaN(weight) || weight < 0){
    result.innerHTML = `Please give a valid  ${weight}`;
   }else{{
    const bmi = "Your BMI is " + (weight / ((height * height) / 10000)).toFixed(2) + " and you are " + cmToFeetInches(height) + " inches tall";

    result.innerHTML = bmi;
   }}

})
  


const result =document.querySelector('#results')

const buttons = document.querySelectorAll('.button');
console.log(buttons);
const body = document.querySelector('body')

const nnewArr = Array.from(buttons);
for (let i = 0; i < nnewArr.length; i++) {
    console.log(nnewArr[i].id);
    nnewArr[i].addEventListener('click', (e) => {
        switch(true){
            case e.target.id === "grey":
                body.style.backgroundColor = e.target.id;
                body.style.color = "#212121";
                break;
            case e.target.id === "white":
                body.style.backgroundColor = e.target.id;
                body.style.color = "#212121";
                result.style.color = "#212121";
                break;
            case e.target.id === "green":
                body.style.backgroundColor = e.target.id;
                body.style.color = "#212121";
                break;
            case e.target.id === "blue":
                body.style.backgroundColor = e.target.id;
                break;
            case e.target.id === "yellow":
                body.style.backgroundColor = e.target.id;
                break;
            case e.target.id === "orange":
                body.style.backgroundColor = e.target.id;
                break;
            case e.target.id === "dark":
                body.style.backgroundColor =  "#212121";
                body.style.color = "#fff";
                result.style.color = "#fff";
                break;
            default:
          }
    });
}
   


    