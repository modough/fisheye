import { mediaFactory } from '../factories/medias.js';
import photographerFactory from '../factories/photographer.js';
import contactForm from '../utils/contactForm.js';
import { submitForm } from '../utils/contactFormValidation.js';
import { fetchData } from '../utils/fetchData.js';
import handleClickOnMedia from '../utils/lightbox.js';

async function getPhotographers() {
	// Penser à remplacer par les données récupérées dans le json
	return fetchData('data/photographers.json');
}

// function for displaying elements
const params = new URL(location.href).searchParams;
const photographerId = params.get('id');
const { photographers, media } = await getPhotographers();
const medias = await media.filter(
	(media) => media.photographerId === parseInt(photographerId)
);
const foundPhotographer = photographers.find(
	(data) => data.id === parseInt(photographerId)
);

const displayPhotographPageHeader = () => {
	if (photographerId) {
		const article = document.querySelector('.photograph-header');
		// partie photograher header
		const photographerModel = photographerFactory(foundPhotographer);
		const userCardDOM = photographerModel.getHeaderCardDOM();
		article.appendChild(userCardDOM);
	}
};

const displayPhotographPageMedia = (media) => {
	const parentDiv = document.querySelector('.photos');
	parentDiv.innerHTML = '';
	media.forEach((elmt) => {
		const photographerModel = mediaFactory(elmt);
		const mediaCardDOM = photographerModel.getMediaCardDOM();
		parentDiv.appendChild(mediaCardDOM);
	});
};
// lightbox
const displayLightbox = (media) => {
	const lightboxDiv = document.querySelector('#lightbox');
	const closeBtn = document.createElement('i');
	const leftChevron = document.createElement('i');
	const rightChevron = document.createElement('i');
	closeBtn.className = 'fa fa-close';
	leftChevron.className = 'fas fa-chevron-left';
	rightChevron.className = 'fas fa-chevron-right';
	lightboxDiv.appendChild(closeBtn);
	lightboxDiv.appendChild(leftChevron);
	lightboxDiv.appendChild(rightChevron);
	media.forEach((link) => {
		const lightboxModel = mediaFactory(link);
		const lightboxCardDOM = lightboxModel.getLightboxCardDOM();
		lightboxDiv.appendChild(lightboxCardDOM);
	});
};

// init all
const init = async () => {
	displayPhotographPageHeader();
	displayPhotographPageMedia(medias);
	displayLightbox(medias);
	handleClickOnMedia();
};
init();
contactForm();
submitForm(medias);
