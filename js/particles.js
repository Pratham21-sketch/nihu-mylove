/* ==========================================
   OUR STORY ❤️
   particles.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    createStars();
    createHearts();
    createPetals();
    createGlowParticles();
    shootingStars();

});

/* ==========================================
   STARS
========================================== */

function createStars() {

    const container = document.getElementById("stars");

    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < 120; i++) {

        const star = document.createElement("div");

        star.className = "star";

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay = Math.random() * 5 + "s";

        container.appendChild(star);

    }

}

/* ==========================================
   FLOATING HEARTS
========================================== */

function createHearts() {

    const container = document.getElementById("hearts");

    if (!container) return;

    const hearts = ["❤️","💕","💖","💗","💓","💞"];

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "floating-heart";

        heart.innerHTML =
            hearts[Math.floor(Math.random()*hearts.length)];

        heart.style.left = Math.random()*100 + "%";

        heart.style.fontSize =
            (18 + Math.random()*18) + "px";

        heart.style.animationDuration =
            (6 + Math.random()*4) + "s";

        container.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        },10000);

    },700);

}

/* ==========================================
   PETALS
========================================== */

function createPetals(){

    setInterval(()=>{

        const petal=document.createElement("div");

        petal.className="petal";

        petal.innerHTML="🌸";

        petal.style.left=Math.random()*100+"%";

        petal.style.fontSize=
        (16+Math.random()*10)+"px";

        petal.style.animationDuration=
        (8+Math.random()*4)+"s";

        document.body.appendChild(petal);

        setTimeout(()=>{

            petal.remove();

        },12000);

    },1200);

}

/* ==========================================
   GLOW PARTICLES
========================================== */

function createGlowParticles(){

    setInterval(()=>{

        const glow=document.createElement("div");

        glow.className="glow-particle";

        glow.style.left=Math.random()*100+"%";

        glow.style.top=Math.random()*100+"%";

        const size=Math.random()*5+2;

        glow.style.width=size+"px";
        glow.style.height=size+"px";

        document.body.appendChild(glow);

        setTimeout(()=>{

            glow.remove();

        },5000);

    },400);

}

/* ==========================================
   SHOOTING STAR
========================================== */

function shootingStars(){

    setInterval(()=>{

        const shooting=document.createElement("div");

        shooting.className="shooting-star";

        shooting.style.top=
        Math.random()*40+"%";

        document.body.appendChild(shooting);

        setTimeout(()=>{

            shooting.remove();

        },2000);

    },9000);

}

/* ==========================================
   END
========================================== */