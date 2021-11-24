"use strict";

window.onload = function () {
  const changeTitle = () => {
    const start = document.querySelector(".start-here");
    start.textContent = "main title";
  };

  const addLiToInnerUl = () => {
    const innerUl = document.querySelector("ul ul");
    const sub4 = document.createElement("li");
    sub4.innerHTML = "sub title 4";
    innerUl.appendChild(sub4);
  };

  const DeleteLastLi = () => {
    const lastLi = document.querySelector("ul");
    lastLi.removeChild(lastLi.lastElementChild);
  };

  const changeText = () => {
    const title = document.querySelector("title");
    title.textContent = "Master Of The Dom";
  };

  const changeP = () => {
    const title = document.querySelector("p");
    title.textContent = "what's your name?";
  };

  changeTitle();
  addLiToInnerUl();
  DeleteLastLi();
  changeText();
  changeP();
};
