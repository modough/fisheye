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
	const res = await fetchData('data/photographers.json');
	const photographers = res.photographers;
	const media = res.media;
	return {
		photographers,
		media,
	};
}

// function for retrieving page id and comparing with data id
const params = new URL(location.href).searchParams;
const photographerId = params.get('id');
const { photographers, media } = await getPhotographers();

//display images and videos by comparing their id's with the query id
const medias = await media.filter(
	(media) => media.photographerId === parseInt(photographerId)
);

//display photographer contact information by comparing his id with the query id
const foundPhotographer = photographers.find(
	(data) => data.id === parseInt(photographerId)
);

//display contact infos at photographer page header
const displayPhotographPageHeader = () => {
	if (photographerId) {
		const article = document.querySelector('.photograph-header');
		const photographerModel = photographerFactory(foundPhotographer);
		const userCardDOM = photographerModel.getHeaderCardDOM();
		article.appendChild(userCardDOM);
	}
};

// display mediacCards
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
		{ key: 'aria-label', value: 'Fermer la lightbox' },
		{ key: 'role', value: 'button' },
	]);
	const leftChevron = createElementDOM('i', '', 'fa fa-chevron-left', [
		{ key: 'tabindex', value: '2' },
		{ key: 'aria-label', value: 'Media précédent' },
		{ key: 'role', value: 'button' },
	]);
	const rightChevron = createElementDOM('i', '', 'fas fa-chevron-right', [
		{ key: 'tabindex', value: '3' },
		{ key: 'aria-label', value: 'Media suivant' },
		{ key: 'role', value: 'button' },
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

// init all functions
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
