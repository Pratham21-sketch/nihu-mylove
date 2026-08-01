/* =======================================
   OUR STORY ❤️
   Anniversary Counter
======================================= */

const startDate = new Date("2026-02-08T00:00:00");

function updateCounter(){

const now = new Date();

const diff = now - startDate;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));

const hours = Math.floor(
(diff % (1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);

const minutes = Math.floor(
(diff % (1000 * 60 * 60))
/
(1000 * 60)
);

const seconds = Math.floor(
(diff % (1000 * 60))
/
1000
);

document.getElementById("days").innerHTML = days;

document.getElementById("hours").innerHTML = hours;

document.getElementById("minutes").innerHTML = minutes;

document.getElementById("seconds").innerHTML = seconds;

}

updateCounter();

setInterval(updateCounter,1000);