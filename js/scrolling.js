document.addEventListener("scroll", eventHandler);
function eventHandler() {
  document.getElementById("back_grad_1").style.height = `${window.scrollY / 6.2 + 16}%`;
  document.getElementById("back_grad_2").style.height = `${86 - window.scrollY / 6.2}%`;
  document.getElementById("back_grad_2").style.marginRight = `${12 - window.scrollY / 25}%`;
  document.getElementById("back_grad_2").style.marginTop = `${9 + window.scrollY / 10}%`;
}
