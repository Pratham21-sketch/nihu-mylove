/* ==========================================
   OUR STORY ❤️
   transition.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    fadeInPage();
    heartbeatAnimation();
    autoHideClick();

});

/* ==========================================
   PAGE FADE IN
========================================== */

function fadeInPage() {

    document.body.style.opacity = "0";
    document.body.style.transition = "opacity .7s ease";

    requestAnimationFrame(() => {
        document.body.style.opacity = "1";
    });

}

/* ==========================================
   PAGE FADE OUT
========================================== */

function fadeOutPage(nextPage) {

    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = nextPage;

    }, 500);

}

/* ==========================================
   CLICK ANYWHERE
========================================== */

let pageChanging = false;

function enableFullPageClick(nextPage) {

    document.body.addEventListener("click", function (e) {

        if (pageChanging) return;

        if (
            e.target.closest("button") ||
            e.target.closest("a") ||
            e.target.closest("audio")
        ) {
            return;
        }

        pageChanging = true;

        fadeOutPage(nextPage);

    });

}

/* ==========================================
   BUTTON TRANSITION
========================================== */

document.addEventListener("click", function (e) {

    const btn = e.target.closest("button");

    if (!btn) return;

    if (!btn.dataset.link) return;

    e.preventDefault();

    fadeOutPage(btn.dataset.link);

});

/* ==========================================
   KEYBOARD SUPPORT
========================================== */

document.addEventListener("keydown", function (e) {

    const next = document.body.dataset.next;

    if (!next) return;

    if (e.key === "Enter" || e.key === " ") {

        e.preventDefault();

        fadeOutPage(next);

    }

});

/* ==========================================
   HEARTBEAT
========================================== */

function heartbeatAnimation() {

    const title = document.querySelector(".title");

    if (!title) return;

    title.style.animation = "heartbeat 1.8s infinite";

}

/* ==========================================
   CLICK TEXT
========================================== */

function autoHideClick() {

    const click = document.querySelector(".click");

    if (!click) return;

    setTimeout(() => {

        click.style.opacity = ".35";

    }, 5000);

}

/* ==========================================
   RESET SCROLL
========================================== */

window.onbeforeunload = () => {

    window.scrollTo(0, 0);

};

/* ==========================================
   END
========================================== */