const screens = document.querySelectorAll(".screen");
const project_links = document.querySelectorAll(".project-link");
const start_btn = document.getElementById("start-btn");

start_btn.addEventListener("click", () => screens[0].classList.add("up"));

project_links.forEach(btn => {

    btn.addEventListener("click", () => {
        const img = btn.querySelector("img");
        const src = img.getAttribute("src");
        const alt = img.getAttribute("alt");

        screens[1].classList.add("up");
    })
})