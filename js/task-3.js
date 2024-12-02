const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", event => {
    const trimmedValue = event.currentTarget.value.trim();
    if (trimmedValue === "") {
nameOutput.textContent = "Anonymous"
    } else {
        nameOutput.textContent = trimmedValue;
    }
});
    