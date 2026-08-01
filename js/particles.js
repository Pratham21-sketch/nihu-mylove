/* ==========================================
   OUR STORY ❤️
   Premium Background Effects
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    createStars();
    createHearts();
    createPetals();
    createGlowParticles();

});

/* ==========================================
   STARS
========================================== */

function createStars() {

    const container = document.getElementById("stars");

    if (!container) return;

    for (let i = 0; i < 250; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.animationDelay =
            Math.random() * 5 + "s";

        container.appendChild(star);

    }

}

/* ==========================================
   FLOATING HEARTS
========================================== */

function createHearts() {

    const container = document.getElementById("hearts");

    if (!container) return;

    const hearts = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💓",
        "💞"
    ];

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "floating-heart";

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize =
            (18 + Math.random() * 18) + "px";

        heart.style.animationDuration =
            (8 + Math.random() * 5) + "s";

        container.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 14000);

    }, 400);

}

/* ==========================================
   ROSE PETALS
========================================== */

function createPetals() {

    setInterval(() => {

        const petal = document.createElement("div");

        petal.className = "petal";

        petal.innerHTML = "🌸";

        petal.style.left = Math.random() * 100 + "vw";

        petal.style.fontSize =
            (16 + Math.random() * 12) + "px";

        petal.style.animationDuration =
            (10 + Math.random() * 6) + "s";

        document.body.appendChild(petal);

        setTimeout(() => {

            petal.remove();

        }, 17000);

    }, 900);

}

/* ==========================================
   GLOW PARTICLES
========================================== */

function createGlowParticles() {

    setInterval(() => {

        const glow = document.createElement("div");

        glow.className = "glow-particle";

        glow.style.left = Math.random() * 100 + "vw";

        glow.style.top = Math.random() * 100 + "vh";

        const size = Math.random() * 6 + 2;

        glow.style.width = size + "px";
        glow.style.height = size + "px";

        document.body.appendChild(glow);

        setTimeout(() => {

            glow.remove();

        }, 6000);

    }, 300);

}

/* ==========================================
   SHOOTING STAR
========================================== */

setInterval(() => {

    const shooting = document.createElement("div");

    shooting.className = "shooting-star";

    shooting.style.top =
        Math.random() * 40 + "vh";

    document.body.appendChild(shooting);

    setTimeout(() => {

        shooting.remove();

    }, 2200);

}, 9000);