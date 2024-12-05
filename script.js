const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Handle "Yes" Button Click
yesBtn.addEventListener("click", () => {
    question.innerHTML = "I LOVE YOU TOO";
    gif.src = "https://giphy.com/embed/zkppEMFvRX5FC";
    gif.width = "600";
    gif.height = "337";

    // Hide the buttons
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // Generate floating hearts
    const heartContainer = document.querySelector('.heart-container');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        heart.style.animationDelay = Math.random() * 2 + 's'; // Random animation delay
        heart.style.animationDuration = Math.random() * 3 + 3 + 's'; // Random duration
        heartContainer.appendChild(heart);
    }
});

// Handle "No" Button Hover
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
