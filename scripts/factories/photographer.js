/* eslint-disable import/prefer-default-export */
function photographerFactory(data) {
  const { id, name, portrait, city, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;
  const link = `./photographer.html?id=${id}`;

  function getUserCardDOM() {
    const photographId = document.createElement("a");
    const article = document.createElement("article");
    const img = document.createElement("img");
    const ville = document.createElement("h3");
    const slogan = document.createElement("p");
    const prix = document.createElement("span");
    const h2 = document.createElement("h2");
    photographId.setAttribute("href", link);
    img.setAttribute("src", picture);
    ville.innerText = city;
    slogan.innerText = tagline;
    prix.innerText = `${price}€/jour`;
    h2.textContent = name;
    photographId.appendChild(article);
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(ville);
    article.appendChild(slogan);
    article.appendChild(prix);
    return photographId;
  }
  return { name, picture, getUserCardDOM };
}
