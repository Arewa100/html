const handleEvent = require('./app')

test("test that when button is clicked event handler changes the content ", ()=> {
    let event = 'click';
    result = handleEvent(event);
    const register = document.getElementById('register')
    let expected = register.textContent = 'wait';
    expect(result).toBe(expected);
})