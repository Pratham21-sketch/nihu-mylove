/* ==========================================
   OUR STORY ❤️
   Proposal Page
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    /* -------------------------
       YES BUTTON
    -------------------------- */

    if (yesBtn) {

        yesBtn.addEventListener("click", (e) => {

            e.stopPropagation();

            heartExplosion(
                window.innerWidth / 2,
                window.innerHeight / 2
            );

            yesBtn.innerHTML = "I Love You ❤️";

            yesBtn.style.transform = "scale(1.15)";

            yesBtn.disabled = true;

            setTimeout(() => {

                window.location.href = "celebration.html";

            }, 1800);

        });

    }

    /* -------------------------
       NO BUTTON
    -------------------------- */

    if (noBtn) {

        noBtn.addEventListener("mouseover", moveButton);
        noBtn.addEventListener("click", moveButton);

    }

});

/* ==========================================
   MOVE NO BUTTON
========================================== */

function moveButton(e) {

    const btn = e.target;

    const maxX = window.innerWidth - btn.offsetWidth - 30;
    const maxY = window.innerHeight - btn.offsetHeight - 30;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btn.style.position = "fixed";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
    btn.style.transition = "0.25s ease";

}

/* ==========================================
   HEART EXPLOSION
========================================== */

function heartExplosion(x, y) {

    const emojis = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💓",
        "💞"
    ];

    for (let i = 0; i < 40; i++) {

        const heart = document.createElement("div");

        heart.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.position = "fixed";
        heart.style.left = x + "px";
        heart.style.top = y + "px";

        heart.style.fontSize =
            (20 + Math.random() * 20) + "px";

        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";
        heart.style.transition = "1.5s ease";

        document.body.appendChild(heart);

        const dx = (Math.random() - 0.5) * 600;
        const dy = (Math.random() - 0.5) * 600;

        setTimeout(() => {

            heart.style.transform =
                `translate(${dx}px, ${dy}px) scale(0) rotate(720deg)`;

            heart.style.opacity = "0";

        }, 20);

        setTimeout(() => {

            heart.remove();

        }, 1600);

    }

}