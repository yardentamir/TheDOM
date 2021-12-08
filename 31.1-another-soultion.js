const startApp = async () => {
  let data = [];

  const getData = async () => {
    for (let i = 1; i <= 10; i++) {
      const reqPeople = await fetch(`https://swapi.dev/api/people/${i}/`);
      const peopleData = await reqPeople.json();
      console.log(peopleData);
      const reqPlanet = await fetch(peopleData.homeworld);
      planetData = await reqPlanet.json();

      data.push({
        name: peopleData.name,
        hair: peopleData.hair_color,
        height: peopleData.height,
        planet: {
          name: planetData.name,
          population: planetData.population,
        },
      });
    }
    console.log(data);

    displayData();
  };
  const displayData = () => {
    const table = document.createElement("table");
    table.classList.add("star-wars");
    const tableBody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const title = document.createElement("td");
    title.setAttribute("colspan", "5");
    title.classList.add("header");
    title.innerHTML = "Star Wars";
    console.log(data[0]);
    const categories = document.createElement("tr");
    data[0].name.forEach((title) => {
      category = `<td>${title}</td>`;
      categories.innerHTML += category;
    });

    tr.appendChild(title);
    tableBody.appendChild(tr);
    tableBody.appendChild(categories);

    data.forEach((item) => {
      if (item.titles) {
        return;
      }
      const tr = document.createElement("tr");
      let td1 = document.createElement("td");
      td1.innerHTML += item.name;
      let td2 = document.createElement("td");
      td2.innerHTML += item.hair;
      let td3 = document.createElement("td");
      td3.innerHTML += item.height;
      let td4 = document.createElement("td");
      td4.innerHTML += item.planet.name;
      let td5 = document.createElement("td");
      td5.innerHTML += item.planet.population;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      tableBody.appendChild(tr);
    });
    table.appendChild(tableBody);
    document.body.appendChild(table);
  };
  getData();
};
startApp();
