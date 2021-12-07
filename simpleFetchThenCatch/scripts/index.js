const jokebtn = document.querySelector(`.getJoke`);
const jokeHolder = document.querySelector(`.joke-holder`);
const jokeButtonText = jokebtn.querySelector(".btn-text");
const jokeTitle = document.querySelector(".joke-title");

const baseURL = "https://api.jokes.one/jod";

const buttonText = [
  "Ugh.",
  "🤦🏻‍♂️",
  "omg what a joke.",
  "you are the worst",
  "seriously",
  "stop it.",
  "please stop",
  "that was the worst one",
];

const getJoke = () => {
  jokeHolder.textContent = "Loading 🥪🥪🥪🥪";
  fetch(baseURL, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((joke) => {
      console.log(joke.contents.jokes[0]);
      jokeTitle.textContent = joke.contents.jokes[0].joke.title;
      jokeHolder.textContent = joke.contents.jokes[0].joke.text;
    })
    .catch((e) => (jokeHolder.textContent = "try again"));
};

const randomItemFromArray = (arr, current) => {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === current) {
    return randomItemFromArray(arr, current);
  }
  return item;
};

const clickHandler = () => {
  getJoke();
  jokeButtonText.textContent = randomItemFromArray(
    buttonText,
    jokeButtonText.textContent
  );
};

jokebtn.addEventListener("click", clickHandler);
