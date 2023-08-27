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

let hasUser = false;

AddUserBtn.addEventListener('click', event => {
    if (userTextInput.value && !hasUser)
        redBlock.innerText = userTextInput.value;
})