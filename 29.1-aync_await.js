//--------------before convert------------------//
// const getIDs = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([532, 543, 753, 1, 5]);
//     }, 1500);
//   });

// const getRecipe = (recipeID) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       (ID) => {
//         const recipe = {
//           title: "Fresh tomato pasta",
//           publisher: "Pinchas Hodadad",
//         };
//         resolve(`${ID}: ${recipe.title}`);
//       },
//       1500,
//       recipeID
//     );
//   });
// };

// getIDs()
//   .then((IDs) => {
//     console.log(IDs);
//     return getRecipe(IDs[2]);
//   })
//   .then((recipe) => {
//     console.log(recipe);
//   })
//   .catch((error) => {
//     console.log("It is an error!");
//   });

//--------------after convert------------------//

const getIDs = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([532, 543, 753, 1, 5]);
    }, 1500);
  });

const getRecipe = (recipeID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = {
          title: "Fresh tomato pasta",
          publisher: "Pinchas Hodadad",
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recipeID
    );
  });
};

const myAsyncFunc = async () => {
  const getIds = await getIDs();
  const done = await getRecipe(getIds[2]);
  console.log(done);
};

myAsyncFunc();

// const getIDs2 = async () => {
//   return [532, 543, 753, 1, 5];
// };

// const getRecipe2 = async () => {
//   const getIds = await getIDs2();
//   const recipe = {
//     title: "Fresh tomato pasta",
//     publisher: "Pinchas Hodadad",
//   };
//   return `${getIds[2]}: ${recipe.title}`;
// };
