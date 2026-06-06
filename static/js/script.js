/* ==========================
   SECTION SWITCHING
========================== */

function showSection(sectionId) {

    const current =
        document.querySelector(".content-section.active");

    const next =
        document.getElementById(sectionId);

    if(!next) return;

    if(current && current.id === sectionId){
        return;
    }

    if(current){

        current.style.opacity = "0";
        current.style.transform =
            "translateX(-60px) scale(.96)";

        setTimeout(()=>{

            current.classList.remove("active");

            next.classList.add("active");

            next.style.opacity = "0";
            next.style.transform =
                "translateX(60px) scale(.96)";

            setTimeout(()=>{

                next.style.opacity = "1";
                next.style.transform =
                    "translateX(0) scale(1)";

            },50);

        },400);

    }else{

        next.classList.add("active");
    }
}

/* ==========================
   TYPING ANIMATION
========================== */

const words = [
    "Computer Science Student",
    "Python Developer",
    "Linux User"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const typingElement = document.getElementById("typing-text");

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingElement.textContent =
            currentWord.substring(0, charIndex--);
    } else {
        typingElement.textContent =
            currentWord.substring(0, charIndex++);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === -1) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

/* ==========================
   LIVE INDIAN TIME
========================== */

function updateClock() {

    const now = new Date();

    const indiaTime = new Date(
        now.toLocaleString(
            "en-US",
            { timeZone: "Asia/Kolkata" }
        )
    );

    const time = indiaTime.toLocaleTimeString("en-IN", {
        hour12: false
    });

    const date = indiaTime.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    document.getElementById("time").innerText = time;
    document.getElementById("date").innerText = date;
}

setInterval(updateClock, 1000);
updateClock();

/* ==========================
   CUSTOM CURSOR
========================== */

const cursor = document.getElementById("cursor");

let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {

    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;

    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor();

/* ==========================
   CURSOR HOVER EFFECT
========================== */

const hoverElements = document.querySelectorAll(
    "a, button, .project-card, .skill-card"
);

hoverElements.forEach(element => {

    element.addEventListener("mouseenter", () => {

        cursor.style.transform =
            "translate(-50%, -50%) scale(1.4)";

    });

    element.addEventListener("mouseleave", () => {

        cursor.style.transform =
            "translate(-50%, -50%) scale(1)";
    });
});

/* ==========================
   SHOOTING STARS
========================== */

function createShootingStar() {

    const star = document.createElement("div");

    star.classList.add("shooting-star");

    star.style.top =
        Math.random() * window.innerHeight / 2 + "px";

    star.style.left =
        Math.random() * window.innerWidth + "px";

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 3000);
}

setInterval(createShootingStar, 12000);

/* ==========================
   TERMINAL
========================== */

const terminalInput =
    document.getElementById("terminal-input");

const terminalOutput =
    document.getElementById("terminal-output");

if (terminalInput) {

    terminalInput.addEventListener("keydown", function (e) {

        if (e.key === "Enter") {

            const command =
                terminalInput.value.trim().toLowerCase();

            executeCommand(command);

            terminalInput.value = "";
        }
    });
}

function printLine(text) {

    const line = document.createElement("p");

    line.innerHTML = text;

    terminalOutput.appendChild(line);

    terminalOutput.scrollTop =
        terminalOutput.scrollHeight;
}

function executeCommand(cmd) {

    printLine(
        `<span style="color:#00e5ff;">
        saikumar@linuxmint:~$
        </span> ${cmd}`
    );

    switch (cmd) {

        case "help":

            printLine(`
                Available Commands:<br>
                about<br>
                skills<br>
                projects<br>
                education<br>
                certifications<br>
                contact<br>
                resume<br>
                status<br>
                clear
            `);

            break;

        case "about":

            printLine(`
                Computer Science Student
                passionate about software
                development and Linux.
            `);

            break;

        case "skills":

            printLine(`
                Python<br>
                C++<br>
                HTML<br>
                CSS<br>
                Linux<br>
                Git<br>
                DSA
            `);

            break;

        case "projects":

            printLine(`
                1. Voice Assistant<br>
                2. Random Password Generator<br>
                3. BMI Calculator
            `);

            break;

        case "education":

            printLine(`
                B.Tech CSE<br>
                Amity University Rajasthan
            `);

            break;

        case "certifications":

            printLine(`
                Python Programming Internship
                (Oasis Infobyte)<br>
                Internet of Things Internship
                (Emertxe)
            `);

            break;

        case "contact":

            printLine(`
                GitHub:
                github.com/saikumarnagishetty<br>
                LinkedIn:
                linkedin.com/in/saikumarnagishetty<br>
                Email:
                nagishettysaikumarpatel@gmail.com
            `);

            break;

        case "resume":

            printLine(`
                Resume download feature
                will be connected here.
            `);

            break;

        case "status":

            printLine(`
                Open to Internship Opportunities 🚀
            `);

            break;

        case "sudo hire saikumar":

            printLine(`
                <span style="color:gold;">
                Access Granted 🚀
                </span><br><br>

                Candidate Found<br>
                Status: Available<br>
                Skills: Python, Linux, Problem Solving
            `);

            break;

        case "clear":

            terminalOutput.innerHTML = "";

            break;

        default:

            printLine(`
                Command not found.
                Type "help"
            `);
    }
}

/* ==========================
   DEFAULT TERMINAL MESSAGE
========================== */

printLine(`
Welcome to Sai Kumar's Terminal
<br>
Type "help" to see commands.
`);

/* ==========================
   PAGE LOAD ANIMATION
========================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
            "opacity 1s ease";

        document.body.style.opacity = "1";

    }, 100);
});

/* ==========================
   ACTIVE HOME SECTION
========================== */

showSection("home");
/* ==========================
   SPACE STARFIELD
========================== */

const canvas = document.getElementById("spaceCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for(let i = 0; i < 600; i++){

    stars.push({

        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        radius: Math.random() * 2,

        speed: Math.random() * 0.3 + 0.1
    });
}

function animateSpace(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    stars.forEach(star => {

        ctx.beginPath();

        ctx.arc(
            star.x,
            star.y,
            star.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "white";
        ctx.fill();

        star.y += star.speed;

        if(star.y > canvas.height){

            star.y = 0;
            star.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(
        animateSpace
    );
}

animateSpace();

window.addEventListener("resize", () => {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;
});
