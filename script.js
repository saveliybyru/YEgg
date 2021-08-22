const technical = document.querySelector(".tech-specs");
const specs = document.querySelector(".tech-specs-list");
const usability = document.querySelector(".usability");
const faq = document.querySelector(".usability-faq");

const packageButton = document.querySelector(".package-button");
const packageItems = document.querySelector(".package-items");

const indicatorsButton = document.querySelector(".indicators-button");
const indicatorsItem = document.querySelector(".indicators-item");

const connectButton = document.querySelector(".first-connect-button");
const instruction = document.querySelector(".instruction");

const buttonBuy = document.querySelector(".buy");
const dialogBuy = document.querySelector(".not-buy");
const closeButton = document.querySelector(".not-buy__hide");

technical.addEventListener("click", function (event) {
  event.preventDefault();
  if (faq.classList.contains("usability-faq_show")) {
    faq.classList.toggle("usability-faq_show") & specs.classList.toggle("tech-specs-list_show")
  } else {
    specs.classList.toggle("tech-specs-list_show")
  }
});

usability.addEventListener("click", function (event) {
  event.preventDefault();
  if (specs.classList.contains("tech-specs-list_show")) {
    specs.classList.toggle("tech-specs-list_show") & faq.classList.toggle("usability-faq_show")
  } else {
    faq.classList.toggle("usability-faq_show")
  }
});

packageButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (indicatorsItem.classList.contains("indicators-item_show")) {
    indicatorsItem.classList.remove("indicators-item_show") && packageItems.classList.add("package-items_show")
  }
  if (instruction.classList.contains("instruction_show")) {
    instruction.classList.remove("instruction_show") & packageItems.classList.add("package-items_show")
  } else {
    packageItems.classList.toggle("package-items_show")
  }
});

indicatorsButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (packageItems.classList.contains("package-items_show")) {
    packageItems.classList.remove("package-items_show") && indicatorsItem.classList.add("indicators-item_show")
  }
  if (instruction.classList.contains("instruction_show")) {
    instruction.classList.remove("instruction_show") & indicatorsItem.classList.add("indicators-item_show")
  } else {
    indicatorsItem.classList.toggle("indicators-item_show")
  }
});

connectButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (packageItems.classList.contains("package-items_show")) {
    packageItems.classList.remove("package-items_show") && instruction.classList.add("instruction_show")
  }
  if (indicatorsItem.classList.contains("indicators-item_show")) {
    indicatorsItem.classList.remove("indicators-item_show") & instruction.classList.add("instruction_show")
  } else {
    instruction.classList.toggle("instruction_show")
  }
})

buttonBuy.addEventListener("click", function (event) {
  event.preventDefault();
  dialogBuy.classList.add("not-buy_show");
})

closeButton.addEventListener("click", function (event) {
  event.preventDefault();
  dialogBuy.classList.remove("not-buy_show");
})