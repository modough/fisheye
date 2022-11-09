import photographerHeader from "../factories/professionalHeader.js";
import professionalMedia from "../factories/professionalMedias.js";
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
};
// function for display
const photographerId = window.location.search.replace("?id=", "");
console.log(photographerId)
const  { photographers }  = await getPhotographers();
const displayPhotographPageHeader = () => {
  if(photographerId){
    const article = document.querySelector(".photograph-header");
    const foundPhotographers = photographers.filter(data => data.id === parseInt(photographerId));
    const foundPhotographer = foundPhotographers[0];

    // partie photograher header
    const photographerModel = photographerHeader(foundPhotographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    article.appendChild(userCardDOM)
  };
  
};

const { media } = await getPhotographers();
console.log(media);
const displayPhotographPageMedia = () => {
  const parentDiv = document.querySelector(".photos");
  const singlePhotographer = media.filter((elmt) => {
    elmt.photographerId === parseInt(photographerId, 10)
  });
  
  // partie photograher media
  
  const photographerModel = professionalMedia(singlePhotographer);
  const userCardDOM = photographerModel.getUserCardDOM();
  parentDiv.appendChild(userCardDOM);
  
};


// display page photographer
const init = async () => {
  displayPhotographPageHeader();
  displayPhotographPageMedia();
};
init();

contactForm();