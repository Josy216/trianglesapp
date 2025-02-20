let width = document.getElementById("base");
let height = document.getElementById("height");
let display = document.getElementById("demo");
let btn = document.querySelector("button");
let togle = document.querySelector(".display");

btn.addEventListener("click", function triangleConvertor() {
  togle.style.display = "block";
  let area = 0.5 * width.value * height.value;
  display.innerHTML = `Area : ${area}`;
});
