const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputs = form.querySelectorAll("input");

    let emptyField = Array.from(inputs).some(input => input.value.trim() === "");

    if (emptyField) {
        alert("All form fields must be filled in"); 
    } else {
        const formData = {};
        inputs.forEach(input => {
            formData[input.name] = input.value.trim();
        });

        console.log(formData);
        form.reset();
    }
});