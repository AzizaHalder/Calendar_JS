// const myHeading = document.querySelector('h4');
// myHeading.textContent = "Hello world!";

const date = new Date();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

document.querySelector('.date').innerHTML
=months[date.getMonth()];

function getCurrentMonth () {
    for(month of months){
        console.log(month)
    }
}

getCurrentMonth()
