// var form = document.getElementById("myForm");
// function handleForm(event) {
//      event.preventDefault(); 
//     } 
// form.addEventListener('submit', handleForm);


// const handleEvent = (event)=> {
//     return null;
// }

const content = document.querySelector('.register')
const button = document.getElementById('button')
const inputText = document.getElementById('myinput')

button.addEventListener('click', (event)=> {
    event.preventDefault();
    console.log(inputText.value)
})


// module.exports = handleEvent;