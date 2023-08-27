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

AddUserBtn.addEventListener('click', () => {
    if (!userTextInput.value) return;
    
    redBlock.innerText = userTextInput.value;
    hasUser = true;
    userTextInput.placeholder = 'Cannot Add More Users'
    userTextInput.value = ''
    userTextInput.disabled = true;
})

DelUserBtn.addEventListener('click', () => {
    boxes.forEach(box => box.innerText = '');
    userTextInput.placeholder = 'User Name'
    userTextInput.disabled = false;
})