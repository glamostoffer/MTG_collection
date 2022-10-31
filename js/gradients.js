console.log(123);

function setTransform(elem) {
  let coefY = (window.innerWidth / 57);
  console.log(elem);
  console.log(coefY);
  document.getElementById(elem).style.transform = "skew(" + coefY + "deg)";
}

setTransform("back_grad_1");
setTransform("back_grad_2");
