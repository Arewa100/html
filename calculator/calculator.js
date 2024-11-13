class Calculator {
    constructor() {

    }

    add(firstNumber, secondNumber) {
        return (firstNumber + secondNumber);
    }

    subtract(firstNumber, secondNumber) {
        return (firstNumber - secondNumber);
    }

    divide(firstNumber, secondNumber){
        return (firstNumber/secondNumber);
    }

    modulo(firstNumber, secondNumber){
        return (firstNumber % secondNumber);
    }

    squareRoot(number) {
        return Math.sqrt(number);
    }

}


let calculator = new Calculator;

const calculatorScreen = document.querySelector('input');

console.log(calculatorScreen);


let firstContainer = '';
let secondContainer = '';
let operator = null;

const buttonOne = document.querySelector('.one')
const buttonTwo = document.querySelector('.two')
const buttonThree = document.querySelector('.three')
const buttonFour = document.querySelector('.four')
const buttonFive = document.querySelector('.five')
const buttonSix = document.querySelector('.six')
const buttonSeven = document.querySelector('.seven')
const buttonEight = document.querySelector('.eight')
const buttonNine = document.querySelector('.nine')
const buttonZero = document.querySelector('.zero')


buttonOne.addEventListener('click', (event)=> {
    const result = event.target.value;
    calculatorScreen.value += result;
    if(operator == null) {
        firstContainer = firstContainer +  result;    
    }
    if(operator != null) {
        secondContainer = secondContainer + result;
        console.log(secondContainer);
    }

    console.log('button one is working')
})



buttonTwo.addEventListener('click', (event)=> {
    const result = event.target.value;
    calculatorScreen.value += result;
    if(operator == null) {
        firstContainer = firstContainer +  result;    
    }
    if(operator != null) {
        secondContainer = secondContainer + result;
        console.log(secondContainer);
    }
    console.log('button two is working')
})

buttonThree.addEventListener('click', (event)=> {
    const result = event.target.value;
    calculatorScreen.value += result;
    if(operator == null) {
        firstContainer = firstContainer +  result;    
    }
    if(operator != null) {
        secondContainer = secondContainer + result;
        console.log(secondContainer);
    }
    console.log('button three is working')
})

buttonFour.addEventListener('click', (event)=> {
    const result = event.target.value;
    calculatorScreen.value += result;
    if(operator == null) {
        firstContainer = firstContainer +  result;    
    }
    if(operator != null) {
        secondContainer = secondContainer + result;
        console.log(secondContainer);
    }
    console.log('button four is working')
})

buttonFive.addEventListener('click', (event)=> {
    const result = event.target.value;
    calculatorScreen.value += result;
    if(operator == null) {
        firstContainer = firstContainer +  result;    
    }
    if(operator != null) {
        secondContainer = secondContainer + result;
        console.log(secondContainer);
    }
    console.log('button five is working')
})

buttonSix.addEventListener('click', (event)=> {
    const result = event.target.value;
    calculatorScreen.value += result;
    if(operator == null) {
        firstContainer = firstContainer +  result;    
    }
    if(operator != null) {
        secondContainer = secondContainer + result;
        console.log(secondContainer);
    }
    console.log('button five is working')
})

buttonSeven.addEventListener('click', (event)=> {
    const result = event.target.value;
    calculatorScreen.value += result;
    if(operator == null) {
        firstContainer = firstContainer +  result;    
    }
    if(operator != null) {
        secondContainer = secondContainer + result;
        console.log(secondContainer);
    }
    console.log('seven is working');
})


buttonEight.addEventListener('click', (event)=> {
    const result = event.target.value;
    calculatorScreen.value += result;
    if(operator == null) {
        firstContainer = firstContainer +  result;    
    }
    if(operator != null) {
        secondContainer = secondContainer + result;
        console.log(secondContainer);
    }
    console.log('eight is working');
})

buttonNine.addEventListener('click', (event)=> {
    const result = event.target.value;
    calculatorScreen.value += result;
    if(operator == null) {
        firstContainer = firstContainer +  result;    
    }
    if(operator != null) {
        secondContainer = secondContainer + result;
        console.log(secondContainer);
    }
    console.log('nine is working');
})


buttonZero.addEventListener('click', (event)=> {
    const result = event.target.value;
    calculatorScreen.value += result;
    if(operator == null) {
        firstContainer = firstContainer +  result;    
    }
    if(operator != null) {
        secondContainer = secondContainer + result;
        console.log(secondContainer);
    }
    console.log('zero is working');
})



//operators
const plusbutton = document.querySelector('.plus')

plusbutton.addEventListener('click', (event)=> {
    const result = event.target.value;
    calculatorScreen.value += result;
    operator = result;
    console.log('plus operator is working');
})



//equality operator
const equalTo = document.querySelector('.equal')

equalTo.addEventListener('click', (event)=> {
    // const result = event.target.value;
    let valueOne = (firstContainer);
    let valueTwo = (secondContainer);
    let theresult = eval(valueOne + operator + valueTwo);
    console.log('equal operator is working');
    calculatorScreen.value = theresult
    firstContainer = '';
    secondContainer = '';
    operator = null;
})