let currentDate = new Date;

let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();

let hour = currentDate.getHours();
let mins = currentDate.getMinutes();
let secs = currentDate.getSeconds();

console.log(`The time is \n${hour}:${mins}:${secs}\nThe date is\n${day}|${month}|${year}`);

console.log(currentDate.toLocaleString());


document.getElementById('show').innerHTML = (`The time is ${hour}:${mins}:${secs}<br>The date is ${day}|${month}|${year}`);
