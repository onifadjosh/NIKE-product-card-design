const contain = document.querySelector(".contain");
const color1 = document.querySelector(".color-1");
const color2 = document.querySelector(".color-2");

color2.addEventListener("click", () => {
    contain.classList.add("change");
});

color1.addEventListener("click", () => {
    contain.classList.remove("change");
});
