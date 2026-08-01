/* ==========================================
   OUR STORY ❤️
   Premium Page Transitions
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    fadeInPage();

    enableKeyboardNavigation();

    preventDoubleClick();

});

/* ==========================================
   PAGE FADE IN
========================================== */

function fadeInPage() {

    document.body.style.opacity = "0";

    document.body.style.transition =
        "opacity .8s ease";

    setTimeout(() => {

        document.body.style.opacity = "1";

    }, 100);

}

/* ==========================================
   PAGE FADE OUT
========================================== */

function fadeOutPage(url) {

    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = url;

    }, 700);

}

/* ==========================================
   BUTTON TRANSITION
========================================== */

document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("click", function(e) {

        if (this.dataset.link) {

            e.preventDefault();

            fadeOutPage(this.dataset.link);

        }

    });

});

/* ==========================================
   CLICK ANYWHERE
========================================== */

function enableClickTransition(nextPage) {

    document.body.addEventListener("click", function(e) {

        if (
            e.target.tagName === "BUTTON" ||
            e.target.tagName === "A"
        ) {

            return;

        }

        fadeOutPage(nextPage);

    });

}

/* ==========================================
   KEYBOARD SUPPORT
========================================== */

function enableKeyboardNavigation() {

    document.addEventListener("keydown", function(e) {

        if (e.key === "Enter") {

            const next = document.body.dataset.next;

            if (next) {

                fadeOutPage(next);

            }

        }

        if (e.key === " ") {

            e.preventDefault();

            const next = document.body.dataset.next;

            if (next) {

                fadeOutPage(next);

            }

        }

    });

}

/* ==========================================
   DISABLE RAPID CLICKS
========================================== */

let pageChanging = false;

function safeTransition(nextPage) {

    if (pageChanging) return;

    pageChanging = true;

    fadeOutPage(nextPage);

}

/* ==========================================
   PREVENT DOUBLE CLICK
========================================== */

function preventDoubleClick() {

    document.addEventListener("dblclick", function(e) {

        e.preventDefault();

    });

}

/* ==========================================
   SCROLL TO TOP
========================================== */

window.onbeforeunload = function () {

    window.scrollTo(0, 0);

};

/* ==========================================
   HEARTBEAT ON PAGE CHANGE
========================================== */

function heartbeatAnimation() {

    const title = document.querySelector(".title");

    if (!title) return;

    title.style.animation =
        "heartbeat 1.5s infinite";

}

heartbeatAnimation();

/* ==========================================
   AUTO HIDE CLICK MESSAGE
========================================== */

setTimeout(() => {

    const click = document.querySelector(".click");

    if (click) {

        click.style.opacity = ".35";

    }

}, 5000);

/* ==========================================
   END
========================================== */