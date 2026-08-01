// ============================
// Elements
// ============================

const loader = document.getElementById("loader");

const welcomeScreen = document.getElementById("welcomeScreen");

const birthdayScreen = document.getElementById("birthdayScreen");

const finalScreen = document.getElementById("finalScreen");

const startBtn = document.getElementById("startBtn");

const nextBtn = document.getElementById("nextBtn");

const typingText = document.getElementById("typingText");

const birthdaySong = document.getElementById("birthdaySong");

// ============================
// Loading Screen
// ============================

window.onload = function () {

    setTimeout(() => {

        loader.style.display = "none";

    }, 2500);

};

// ============================
// Birthday Message
// ============================

const message =

`Happy Birthday!

May Allah bless you with happiness,
good health, success and a beautiful future.

Thank you for being an amazing person.

Enjoy your special day and keep smiling forever! ❤️`;

// ============================
// Typing Effect
// ============================

let index = 0;

function typeMessage() {

    if (index < message.length) {

        typingText.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeMessage, 45);

    }

}

// ============================
// Start Button
// ============================

startBtn.addEventListener("click", () => {

    welcomeScreen.style.display = "none";

    birthdayScreen.style.display = "block";

    birthdaySong.play();

    typeMessage();

});
// ============================
// Next Surprise
// ============================

nextBtn.addEventListener("click", () => {

    birthdayScreen.style.display = "none";

    finalScreen.style.display = "block";

    createHearts();

    createConfetti();

});

// ============================
// Hearts Animation
// ============================

function createHearts() {

    const hearts = document.querySelector(".hearts");

    setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "absolute";

        heart.style.left = Math.random() * 100 + "%";

        heart.style.top = "100%";

        heart.style.fontSize = (20 + Math.random() * 25) + "px";

        heart.style.animation = "floatHeart 6s linear forwards";

        hearts.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 6000);

    }, 300);

}

// ============================
// Confetti
// ============================

function createConfetti() {

    const container = document.getElementById("confettiContainer");

    for (let i = 0; i < 200; i++) {

        const confetti = document.createElement("span");

        confetti.style.position = "absolute";

        confetti.style.left = Math.random() * 100 + "%";

        confetti.style.top = "-20px";

        confetti.style.width = "8px";

        confetti.style.height = "8px";

        confetti.style.background =
        `hsl(${Math.random()*360},100%,60%)`;

        confetti.style.animation =
        `confettiFall ${3 + Math.random()*3}s linear forwards`;

        container.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 7000);

    }

}

// ============================
// End
// ============================

console.log("Birthday Surprise Loaded Successfully ❤️");