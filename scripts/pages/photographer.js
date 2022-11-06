import photographerFactory from "../factories/professionalPage.js";
import contactForm from "../utils/contactForm.js";

async function getPhotographers() {
  // Penser à remplacer par les données récupérées dans le json
  return (
    fetch("data/photographers.json")
    .then((res) => res.json())
    .then((res) =>{
      const photographers = res.photographers;
      const media = res.media;
      return {
          photographers,
          media
      }
    })
    .catch((err) => console.log(err))
  );
}

const photographerId = window.location.search.replace("?id=", "");
const  {photographers}  = await getPhotographers();


// page photographer
async function init (){
  if(photographerId){
    //const mediaWrapper = document.querySelector('.photographerMedia');
    const article = document.querySelector(".photograph-header");
    const foundPhotographers = photographers.filter(x => x.id=== parseInt(photographerId, 10));
    const foundPhotographer = foundPhotographers[0]

    // partie photograher header
    const photographerModel = photographerFactory(foundPhotographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    article.appendChild(userCardDOM)
  }
  return article;
}
init()
contactForm();