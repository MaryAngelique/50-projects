const screens = document.querySelectorAll(".screen");
const project_links = document.querySelectorAll(".project-link");


project_links.forEach(btn => {

    btn.addEventListener("click", () => {
        const img = btn.querySelector("img");
        const src = img.getAttribute("src");
        const alt = img.getAttribute("alt");

        screens[1].classList.add("up");
    })
})