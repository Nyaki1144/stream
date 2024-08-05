const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(input.value);
});
