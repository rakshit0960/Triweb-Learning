function getDigitalTime() {
    let date = new Date();
    
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let meridian = (hour > 12) ? 'PM' : 'AM';
    
    hour = hour > 12 ? hour - 12 : hour;
    hour = (hour < 10 ? '0' : '') + hour;
    minutes = (minutes < 10 ? '0' : '') + minutes;
    seconds = (seconds < 10 ? '0' : '') + seconds;

    return `${hour} : ${minutes} : ${seconds}  ${meridian}`

}

console.log(getDigitalTime())