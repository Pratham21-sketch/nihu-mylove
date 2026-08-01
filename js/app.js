/* ==========================================
   OUR STORY ❤️
   Main JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    createStars();

    createHearts();

    pageTransition();

});

/* ==========================================
   CREATE STARS
========================================== */

function createStars(){

    const container = document.getElementById("stars");

    if(!container) return;

    for(let i=0;i<180;i++){

        const star=document.createElement("div");

        star.className="star";

        star.style.left=Math.random()*100+"vw";

        star.style.top=Math.random()*100+"vh";

        star.style.animationDelay=Math.random()*5+"s";

        star.style.opacity=Math.random();

        star.style.width=(Math.random()*3+1)+"px";

        star.style.height=star.style.width;

        container.appendChild(star);

    }

}

/* ==========================================
   FLOATING HEARTS
========================================== */

function createHearts(){

    const container=document.getElementById("hearts");

    if(!container) return;

    const emojis=[
        "❤️",
        "💕",
        "💖",
        "💗",
        "💓"
    ];

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="floating-heart";

        heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(18+Math.random()*18)+"px";

        heart.style.animationDuration=(6+Math.random()*5)+"s";

        container.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },12000);

    },350);

}

/* ==========================================
   PAGE TRANSITION
========================================== */

function pageTransition(){

    document.body.addEventListener("click",(e)=>{

        if(
            e.target.tagName==="BUTTON" ||
            e.target.tagName==="A"
        ){
            return;
        }

    });

}

/* ==========================================
   GO TO NEXT PAGE
========================================== */

function go(page){

    document.body.classList.add("fade-out");

    setTimeout(()=>{

        window.location.href=page;

    },700);

}

/* ==========================================
   TYPEWRITER
========================================== */

function typeWriter(id,text,speed=45){

    const element=document.getElementById(id);

    if(!element) return;

    element.innerHTML="";

    let i=0;

    const timer=setInterval(()=>{

        element.innerHTML+=text.charAt(i);

        i++;

        if(i>=text.length){

            clearInterval(timer);

        }

    },speed);

}

/* ==========================================
   HEART EXPLOSION
========================================== */

function heartExplosion(x,y){

    for(let i=0;i<25;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";

        heart.style.left=x+"px";

        heart.style.top=y+"px";

        heart.style.pointerEvents="none";

        heart.style.fontSize="22px";

        heart.style.transition="1s ease";

        heart.style.zIndex="9999";

        document.body.appendChild(heart);

        const dx=(Math.random()-0.5)*300;

        const dy=(Math.random()-0.5)*300;

        setTimeout(()=>{

            heart.style.transform=
            `translate(${dx}px,${dy}px) scale(0)`;

            heart.style.opacity="0";

        },20);

        setTimeout(()=>{

            heart.remove();

        },1000);

    }

}

/* ==========================================
   DOUBLE CLICK EFFECT
========================================== */

document.addEventListener("dblclick",(e)=>{

    heartExplosion(e.clientX,e.clientY);

});

/* ==========================================
   CLICK ANYWHERE TO CONTINUE
========================================== */

function enableFullPageClick(nextPage){

    document.body.onclick=function(){

        go(nextPage);

    };

}

/* ==========================================
   MUSIC
========================================== */

function toggleMusic(){

    const music=document.getElementById("music");

    if(!music) return;

    if(music.paused){

        music.play();

    }

    else{

        music.pause();

    }

}