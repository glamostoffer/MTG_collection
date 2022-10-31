document.addEventListener("scroll", eventHandler);
console.log(123);
function eventHandler() {
  console.log("func")
  document.getElementById("back_grad_1").style.height = `${window.scrollY / 5.6 + 17}%`;
}
