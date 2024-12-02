function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".Change-Color");
const spanColor = document.querySelector(".color");

changeColor.addEventListener("click", () => {
    spanColor.textContent = getRandomHexColor();
    document.body.style.backgroundColor = getRandomHexColor();
})