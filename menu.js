const textarea = document.querySelector("textarea");
const counter = document.querySelector(".counter");
const button = document.querySelector("button");
const list = document.querySelector(".notes-list");

textarea.addEventListener("input", function () {
    if (textarea.value.length > 200) {
        textarea.value = textarea.value.slice(0, 200);
    }
    counter.textContent = textarea.value.length + " / 200";
});

button.addEventListener("click", function () {
    if (textarea.value === "") return;

    const li = document.createElement("li");
    const p = document.createElement("p");

    p.textContent = textarea.value;

    li.appendChild(p);
    list.appendChild(li);

    textarea.value = "";
    counter.textContent = "0 / 200";
});
