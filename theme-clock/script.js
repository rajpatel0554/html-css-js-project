
const hourE1 = document.querySelector('.hour')
const minuteE1 = document.querySelector('.minute')
const secondE1 = document.querySelector('.second')
const timeE1 = document.querySelector('.time')
const dateE1 = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e) =>{
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

function setTime(){
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >=12? 'PM' : 'AM'

    hourE1.style.transform = `translate(-50% , -100%) rotate(${scale(hoursForClock,0,12,0,360)}deg)`
    minuteE1.style.transform = `translate(-50% , -100%) rotate(${scale(minutes,0,60,0,360)}deg)`
    secondE1.style.transform = `translate(-50% , -100%) rotate(${scale(seconds,0,60,0,360)}deg)`

    timeE1.innerHTML = `${hoursForClock};${minutes < 10 ? `0${minutes}`: minutes} ${ampm}`
    dateE1.innerHTML = `${days[day]}, ${months[month]} <span class = "circle">${date} </span>`   
}
const scale = (num, in_min, in_max, out_min, out_max) =>{
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime,1000)