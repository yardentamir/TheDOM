"use strict";

const printSmileys = () => {
  const inputValue = document.querySelector("#numberOfSmileys").value;
  const container = document.querySelector(".container");

  const msg = document.querySelector("#msg");
  if (msg) container.removeChild(msg);

  if (isNaN(inputValue)) {
    let msgNotNum = document.createElement("div");
    msgNotNum.textContent = "Not a number";
    msgNotNum.id = "msg";
    container.appendChild(msgNotNum);
  }

  const showSmileyDiv = document.querySelector("#showSmileyDiv");
  if (showSmileyDiv) {
    showSmileyDiv.querySelectorAll("*").forEach((n) => n.remove());
  }

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
