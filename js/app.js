/* ==========================================
   OUR STORY ❤️
   Main App Script
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    startMusic();
    createStars();
    createHearts();
    loadingScreen();

});

/* ==========================================
   BACKGROUND MUSIC
========================================== */

function startMusic() {

    const music = document.getElementById("music");

    if (!music) return;

    music.volume = 0.30;

    // Restore playback position
    const savedTime = localStorage.getItem("musicTime");

    if (savedTime) {

        music.currentTime = parseFloat(savedTime);

    }

    // Start music after first user interaction
    const playMusic = () => {

        music.play().catch(() => {});

        document.removeEventListener("click", playMusic);
        document.removeEventListener("touchstart", playMusic);

    };

    document.addEventListener("click", playMusic);
    document.addEventListener("touchstart", playMusic);

    // Save playback position every second
    setInterval(() => {

        if (!music.paused) {

            localStorage.setItem("musicTime", music.currentTime);

        }

    }, 1000);

}

/* ==========================================
   LOADER
========================================== */

function loadingScreen() {

    const loader = document.querySelector(".loader");

    if (!loader) return;

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }, 2500);

}

/* ==========================================
   STARS
========================================== */

function createStars() {

    const container = document.getElementById("stars");

    if (!container) return;

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

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "floating-heart";

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "%";

        heart.style.fontSize = (18 + Math.random() * 18) + "px";

        heart.style.animationDuration = (6 + Math.random() * 4) + "s";

        container.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 10000);

    }, 800);

}

/* ==========================================
   FULL PAGE CLICK
========================================== */

function enableFullPageClick(nextPage) {

    document.body.addEventListener("click", function (e) {

        if (
            e.target.closest("button") ||
            e.target.closest("a") ||
            e.target.closest("audio")
        ) {

            return;

        }

        window.location.href = nextPage;

    });

}

/* ==========================================
   SMOOTH FADE
========================================== */

window.addEventListener("pageshow", () => {

    document.body.classList.add("page-loaded");

});

/* ==========================================
   END
========================================== */