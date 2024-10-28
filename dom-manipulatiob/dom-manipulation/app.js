
const content = document.querySelector('input');
const buttonOne = document.getElementById('button');
const buttonTwo = document.getElementById('button2')
const tasks = document.getElementById('tasks');


// buttonOne.addEventListener('click', (event)=> {
//     event.preventDefault();
//     content.setAttribute('class', 'newId')
// })

// buttonTwo.addEventListener('click', (event)=> {
//     event.preventDefault();
//     const theAttribute = content.getAttribute('class')
//     console.log(theAttribute)
// })

buttonOne.addEventListener('click', ()=> {
    const contentOfInput = content.value
    if(contentOfInput.trim()) {
        const theChild = tasks
        
    }
})
// module.exports = handleEvent;  