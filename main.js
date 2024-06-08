const shareBtn = document.querySelector(".share-btn");
const mobileShareBtn = document.querySelector(".mobile-share");


shareBtn.addEventListener("click", () => {
    const icons = document.querySelector(".icons");
    icons.classList.toggle("hidden");
})

mobileShareBtn.addEventListener("click", () => {
    const icons = document.querySelector(".icons");
    icons.classList.toggle("hidden");
})