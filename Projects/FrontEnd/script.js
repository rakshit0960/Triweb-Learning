const boxes = document.querySelectorAll(".box")

const redBlock = document.querySelector(".red-box")
const blueBlock = document.querySelector(".blue-box")
const greenBlock = document.querySelector(".green-box")
const yellowBlock = document.querySelector(".yellow-box")

const userTextInput = document.querySelector(".user-input")
const AddUserBtn = document.querySelector(".add-user")
const DelUserBtn = document.querySelector(".del-user")

const moveToRedBtn = document.querySelector(".to-red")
const moveToGreenBtn = document.querySelector(".to-green")
const moveToBlueBtn = document.querySelector(".to-blue")
const moveToYellowBtn = document.querySelector(".to-yellow")

let currentUser = ''

AddUserBtn.addEventListener('click', () => {
    if (!userTextInput.value) return;
    
    currentUser = userTextInput.value;
    redBlock.innerText = currentUser;
    hasUser = true;
    userTextInput.placeholder = 'Cannot Add More Users'
    userTextInput.value = ''
    AddUserBtn.disabled = true;
    userTextInput.disabled = true;
})

DelUserBtn.addEventListener('click', () => {
    boxes.forEach(box => box.innerText = '');
    currentUser= ''
    userTextInput.placeholder = 'User Name'
    userTextInput.disabled = false;
    AddUserBtn.disabled = false;
})


moveToRedBtn.addEventListener('click', () => {
    boxes.forEach(box => box.innerText = '');
    redBlock.innerText = currentUser;
})

moveToBlueBtn.addEventListener('click', () => {
    boxes.forEach(box => box.innerText = '');
    blueBlock.innerText = currentUser;
})    

moveToGreenBtn.addEventListener('click', () => {
    boxes.forEach(box => box.innerText = '');
    greenBlock.innerText = currentUser;
})

moveToYellowBtn.addEventListener('click', () => {
    boxes.forEach(box => box.innerText = '');
    yellowBlock.innerText = currentUser;
})

