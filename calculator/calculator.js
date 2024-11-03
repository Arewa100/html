const  {buttonOne, buttonTwo, buttonThree, 
buttonFour, buttonFive,buttonSix,
buttonSeven, buttonEight, buttonNine} = require('./buttons');

const calculatorScreen = document.querySelector('input');

console.log(calculatorScreen);



buttonSeven.addEventListener('click', (event)=> {
    const result = event.target.value;
        calculatorScreen.value += result
    console.log('seven is working');
})



// buttonOne.addEventListener('click', (event)=> {
//     const result = event.target.value;
//     calculatorScreen.value += result;
//     console.log('button one is working')
// })




