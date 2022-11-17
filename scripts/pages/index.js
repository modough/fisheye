import photographerFactory from '../factories/photographer.js';
import { fetchData } from '../utils/fetchdata.js';

async function getPhotographers() {
	// Penser à remplacer par les données récupérées dans le json
	return fetchData();
}

async function displayData(photographers) {
	const photographersSection = document.querySelector('.photographer_section');

	photographers.forEach((photographer) => {
		const photographerModel = photographerFactory(photographer);
		const userCardDOM = photographerModel.getUserCardDOM();
		photographersSection.appendChild(userCardDOM);
	});
}

async function init() {
	// Récupère les datas des photographes
	const { photographers } = await getPhotographers();
	displayData(photographers);
}

init();
