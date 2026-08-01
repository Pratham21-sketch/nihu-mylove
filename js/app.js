/* ==========================================
   OUR STORY ❤️
   app.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    startMusic();
    loadingScreen();

});

/* ==========================================
   BACKGROUND MUSIC
========================================== */

function startMusic() {

    const music = document.getElementById("music");

    if (!music) return;

    music.volume = 0.30;

    // Restore saved position
    const savedTime = localStorage.getItem("musicTime");

    if (savedTime) {
        music.currentTime = parseFloat(savedTime);
    }

    // Play after first interaction
    function playMusic() {

        music.play().catch(() => {});

        document.removeEventListener("click", playMusic);
        document.removeEventListener("touchstart", playMusic);

    }

    document.addEventListener("click", playMusic);
    document.addEventListener("touchstart", playMusic);

    // Save playback position
    music.addEventListener("timeupdate", () => {

        localStorage.setItem("musicTime", music.currentTime);

    });

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
   TYPEWRITER
========================================== */

function typeWriter(id, text, speed = 35) {

    const element = document.getElementById(id);

    if (!element) return;

    element.innerHTML = "";

    let i = 0;

    function typing() {

        if (i < text.length) {

            element.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, speed);

        }

    }

    typing();

}

/* ==========================================
   CLICK ANYWHERE
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
   PAGE FADE
========================================== */

window.addEventListener("pageshow", () => {

    document.body.classList.add("page-loaded");

});

/* ==========================================
   END
========================================== */