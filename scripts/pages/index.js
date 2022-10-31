fetch("/data/photographers.json")
  .then((response) => response.json())
  .then((data) => {
    const { photographers } = data;

    photographers.forEach((elmt) => {
      const section = document.querySelector(".photographer_section");
      const id = document.createElement("a");
      const article = document.createElement("article");
      const name = document.createElement("h2");
      const img = document.createElement("img");
      const city = document.createElement("h3");
      const slogan = document.createElement("p");
      const price = document.createElement("span");

      id.href = `./photographer.html?id=${elmt.id}`;
      name.innerText = elmt.name;
      img.src = `assets/photographers/${elmt.portrait}`;
      city.innerText = elmt.city;
      slogan.innerText = elmt.tagline;
      price.innerText = `${elmt.price}€/jour`;

      id.appendChild(article);
      article.appendChild(img);
      article.appendChild(name);
      article.appendChild(city);
      article.appendChild(slogan);
      article.appendChild(price);
      section.appendChild(id);
    });
  });

/* import { photographerFactory } from "../factories/photographer";

const getPhotographers = async () => {
  // Penser à remplacer par les données récupérées dans le json
  await fetch("/data/photographers.json")
    .then((response) => response.json())
    .then((datas) => datas);
};

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);

    photographersSection.appendChild(photographerModel);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}
init(); */
