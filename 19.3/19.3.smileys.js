"use strict";

const printSmileys = () => {
  const showSmileyDiv = document.querySelector("#showSmileyDiv");
  if (showSmileyDiv) {
    showSmileyDiv.querySelectorAll("*").forEach((n) => n.remove());
  }

  const inputValue = document.querySelector("#numberOfSmileys").value;
  for (let i = 1; i < parseInt(inputValue) + 1; i++) {
    const createImg = document.createElement("img");
    createImg.src =
      "./smily-hd-smily-hd-images-label-text-banana-plant-transparent-png-2248425.png";
    createImg.classList.add("img-size");
    showSmileyDiv.append(createImg);
  }
};

const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", printSmileys);
