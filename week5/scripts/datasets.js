const list = document.querySelectorAll("#items li");
const details = document.createElement("pre");
document.body.appendChild(details);

list.forEach(item => {
    item.addEventListener("click", () => {
        details.innerHTML = `
            <h2>Item Details</h2>
            Name:${item.dataset.name}
            Category:${item.dataset.category}
            Color:${item.dataset.color}
        `;
    })
});
