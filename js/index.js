let main = document.getElementById("back");

let i = 0;

imgs = ["img/biting-palm.jpg", "img/koi.jpg", "img/suit.jpg", "img/sunblade-samurai.jpg", "img/toad-rider.jpg"];

function takeCard() {
  ++i;

  const container_to_append = document.querySelector(".top_card_container").cloneNode(true);
  console.log(container_to_append);

  const img = container_to_append.querySelector("#img");
  console.log(img);

  img.id = "img" + i;

  img.src = imgs[i % 5];

  console.dir(main.parentElement);

  main.parentElement.appendChild(container_to_append);
}

main.addEventListener("click", takeCard);
