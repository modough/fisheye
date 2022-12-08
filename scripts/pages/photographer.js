import { mediaFactory } from '../factories/medias.js';
import photographerFactory from '../factories/photographer.js';
import contactForm from '../utils/contactForm.js';
import { submitForm } from '../utils/contactFormValidation.js';
import { fetchData } from '../utils/fetchData.js';
import { filtered } from '../utils/filtered.js';
import handleClickOnMedia from '../utils/lightbox.js';
import handleNumberOfLikes from '../utils/likes.js';

// Retrieving data from json file
async function getPhotographers() {
	return fetchData('data/photographers.json');
}

// function for retrieving page id and comparing with data id
const params = new URL(location.href).searchParams;
const photographerId = params.get('id');
const { photographers, media } = await getPhotographers();
const medias = await media.filter(
	(media) => media.photographerId === parseInt(photographerId)
);
const professionals = await photographers.filter(
	(photographer) => photographer.id === parseInt(photographerId)
);

//display photograph contact information
const foundPhotographer = photographers.find(
	(data) => data.id === parseInt(photographerId)
);
const displayPhotographPageHeader = () => {
	if (photographerId) {
		const article = document.querySelector('.photograph-header');
		const photographerModel = photographerFactory(foundPhotographer);
		const userCardDOM = photographerModel.getHeaderCardDOM();
		article.appendChild(userCardDOM);
	}
};

// display mediacards
export function displayPhotographPageMedia(medias) {
	const parentDiv = document.querySelector('#photos');
	parentDiv.innerHTML = '';

	medias.forEach((elmt) => {
		const photographerModel = mediaFactory(elmt);
		const mediaCardDOM = photographerModel.getMediaCardDOM();
		parentDiv.appendChild(mediaCardDOM);
	});
	handleNumberOfLikes(medias);
}

// display lightbox
export function displayLightbox(medias) {
	const lightboxDiv = document.querySelector('#lightbox');
	lightboxDiv.innerHTML = '';
	const closeBtn = document.createElement('i');
	const leftChevron = document.createElement('i');
	const rightChevron = document.createElement('i');
	closeBtn.className = 'fa fa-close';
	leftChevron.className = 'fas fa-chevron-left';
	rightChevron.className = 'fas fa-chevron-right';
	lightboxDiv.appendChild(closeBtn);
	lightboxDiv.appendChild(leftChevron);
	lightboxDiv.appendChild(rightChevron);

	medias.forEach((link) => {
		const lightboxModel = mediaFactory(link);
		const lightboxCardDOM = lightboxModel.getLightboxCardDOM();
		lightboxDiv.appendChild(lightboxCardDOM);
	});
}

// init all
const init = async () => {
	displayPhotographPageHeader();
	displayPhotographPageMedia(medias);
	displayLightbox(medias);
	contactForm();
	submitForm(professionals);
	handleClickOnMedia();
	filtered(medias);
};
init();
