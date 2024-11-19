// JavaScript pour animer le chat qui fait un bisou
const chatImg = document.getElementById("chat-img");
const bisou = document.getElementById("bisou");

chatImg.addEventListener("click", () => {
    bisou.style.animation = "none"; // Reset animation
    bisou.offsetHeight; // Trigger reflow to restart animation
    bisou.style.animation = "bisouAnimation 2s infinite"; // Restart animation
});

