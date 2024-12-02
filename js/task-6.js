function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");


createButton.addEventListener("click", () => {
    const amount = parseInt(input.value, 10);

    // Geçerli bir sayı mı?
    if (!isNaN(amount) && amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = ""; 
    }
});


destroyButton.addEventListener("click", destroyBoxes);

// createBoxes fonksiyonu
function createBoxes(amount) {
    destroyBoxes(); // Eski kutuları temizle

    const elements = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
        const div = document.createElement("div");
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomHexColor();
        div.style.margin = "5px"; 
        elements.push(div);
        size += 10; 
    }

    // Tüm div'leri DOM'a ekle
    boxes.append(...elements);
}

// destroyBoxes fonksiyonu
function destroyBoxes() {
    boxes.innerHTML = ""; 
}
