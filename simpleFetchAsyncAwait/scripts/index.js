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

const getJoke = async () => {
  jokeHolder.textContent = "Loading 🥪🥪🥪🥪";
  const response = await fetch(baseURL, {
    headers: {
      Accept: "application/json",
    },
  });
  try {
    const joke = await response.json();
    jokeTitle.textContent = joke.contents.jokes[0].joke.title;
    jokeHolder.textContent = joke.contents.jokes[0].joke.text;
  } catch {
    console.log("error");
  }
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
