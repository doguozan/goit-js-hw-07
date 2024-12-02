const categoriItem = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriItem.length}`);

const categoriItemTitle = document.querySelectorAll("li.item");
categoriItemTitle.forEach(item => {
    const category = item.querySelector("h2");
    const elements = item.querySelectorAll("ul > li");

    console.log(`Category: ${category.textContent}`);
    console.log(`Number of elements: ${elements.length}`);
});