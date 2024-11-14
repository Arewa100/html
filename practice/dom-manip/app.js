const listItem = document.querySelector('li')
const redoButton = document.getElementById('redo')
const undoButton = document.getElementById('undo')

redoButton.addEventListener('click', (event)=> [
    console.log(event.target.value)
])

undoButton.addEventListener('click', (event)=> [
    console.log(event.target.value)
])

const screen = document.querySelector('.box')
// listItem.innerHTML = `
//     <a href="#"><h1>IS THIS PLAYING</h1></a>
// `