import { mediaFactory } from '../factories/medias.js';
import photographerFactory from '../factories/photographer.js';
import contactForm from '../utils/contactForm.js';
import { submitForm } from '../utils/contactFormValidation.js';
import { fetchData } from '../utils/fetchData.js';
import { filtered } from '../utils/filtered.js';
import handleClickOnMedia from '../utils/lightbox.js';
import handleNumberOfLikes from '../utils/likes.js';
import createElementDOM from '../utils/genericDom';

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

//display photographer contact information by comparing his id and the query id
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
	const closeBtn = createElementDOM('i', '', 'fa fa-close', [
		{ key: 'tabindex', value: '1' },
	]);
	const leftChevron = createElementDOM('i', '', 'fa fa-chevron-left', [
		{ key: 'tabindex', value: '2' },
	]);
	const rightChevron = createElementDOM('i', '', 'fas fa-chevron-right', [
		{ key: 'tabindex', value: '3' },
	]);

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
	submitForm(foundPhotographer);
	handleClickOnMedia();
	filtered(medias);
};
init();
