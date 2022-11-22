import { professionalInfos, professionalMedias } from '../factories/medias.js';
import contactForm from '../utils/contactForm.js';
import { submitForm } from '../utils/contactFormValidation.js';
import { fetchData } from '../utils/fetchdata.js';
import { displayLightbox } from '../utils/lightbox.js';

async function getPhotographers() {
	// Penser à remplacer par les données récupérées dans le json
	return fetchData();
}

// function for display
const params = new URL(location.href).searchParams;
const photographerId = params.get('id');
const { photographers, media } = await getPhotographers();

const displayPhotographPageHeader = () => {
	if (photographerId) {
		const article = document.querySelector('.photograph-header');
		const foundPhotographers = photographers.filter(
			(data) => data.id === parseInt(photographerId)
		);
		const foundPhotographer = foundPhotographers.length
			? foundPhotographers[0]
			: null;

		// partie photograher header
		const photographerModel = professionalInfos(foundPhotographer);
		const userCardDOM = photographerModel.getInfoCardDOM();
		article.appendChild(userCardDOM);
	}
};

const displayPhotographPageMedia = (media) => {
	const parentDiv = document.querySelector('.photos');
	parentDiv.innerHTML = '';
	media.forEach((elmt) => {
		const photographerModel = professionalMedias(elmt);
		const mediaCardDOM = photographerModel.getMediaCardDOM();
		parentDiv.appendChild(mediaCardDOM);
	});
};

// display page photographer
const init = async () => {
	displayPhotographPageHeader();
	const medias = await media.filter(
		(media) => media.photographerId === parseInt(photographerId)
	);
	displayPhotographPageMedia(medias);
	displayLightbox();
};
init();
contactForm();
submitForm();
