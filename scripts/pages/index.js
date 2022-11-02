/* fetch("/data/photographers.json")
  .then((response) => response.json())
  .then((data) => {
    const displayData = () => {
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
    };
    displayData();
  }); */

async function getPhotographers() {
  // Penser à remplacer par les données récupérées dans le json
  return (
    fetch("data/photographers.json")
      .then((res) => res.json())
      .then((datas) => datas)
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err))
  );
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
    // eslint-disable-next-line no-console
    console.log(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
