const toggle = document.getElementById("themeToggle");
const modeTog = document.querySelector(".mode__tog");

toggle.addEventListener("click", () => {
toggle.classList.toggle("active");
document.body.classList.toggle("dark")
})

modeTog.addEventListener("click", () => {
    toggle.classList.toggle("active");
    modeTog.classList.toggle("active");
    document.body.classList.toggle("dark")
})