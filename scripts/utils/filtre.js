import { displayPhotographPageMedia } from '../pages/photographer';
import createElementDOM from '../utils/genericDom';
import handleClickOnMedia from './lightbox';

export const filtered = (media) => {
	const parentFilterDiv = document.querySelector('.trierDiv');
	const populariteDiv = document.querySelector('.popularite');
	const hideFilterArrow = document.querySelector('.fa-angle-up');
	const showFilterArrow = createElementDOM('i', '', 'fas fa-angle-down');
	const sortMainDiv = createElementDOM('div', '', 'oneFilterOnly');
	const paragraph = createElementDOM('p', 'Popularité', '');
	const hiddenDiv = document.querySelector('.trierOption');
	const dateDiv = document.querySelector('.date');
	const titreDiv = document.querySelector('.titre');
	sortMainDiv.appendChild(paragraph);
	sortMainDiv.appendChild(showFilterArrow);
	parentFilterDiv.appendChild(sortMainDiv);

	showFilterArrow.addEventListener('click', () => {
		hiddenDiv.style.display = 'block';
		sortMainDiv.style.display = 'none';
	});
	hideFilterArrow.addEventListener('click', () => {
		hiddenDiv.style.display = 'none';
		sortMainDiv.style.display = 'flex';
	});

	populariteDiv.addEventListener('click', () => {
		const newMediaArray = media.sort((a, b) => {
			return b.likes - a.likes;
		});
		console.log(newMediaArray);
		displayPhotographPageMedia(newMediaArray);
		hiddenDiv.style.display = 'none';
		sortMainDiv.style.display = 'flex';
		newMediaArray.forEach((media) => {
			handleClickOnMedia(media);
		});
	});
	dateDiv.addEventListener('click', () => {
		const newMediaArray = media.sort((a, b) => {
			return new Date(b.date) - new Date(a.date);
		});
		displayPhotographPageMedia(newMediaArray);
		hiddenDiv.style.display = 'none';
		sortMainDiv.style.display = 'flex';
		paragraph.textContent = 'Date';
		newMediaArray.forEach((media) => {
			handleClickOnMedia(media);
		});
	});
	titreDiv.addEventListener('click', () => {
		const newMediaArray = media.sort((a, b) => {
			return a.title.localeCompare(b.title);
		});
		displayPhotographPageMedia(newMediaArray);
		hiddenDiv.style.display = 'none';
		sortMainDiv.style.display = 'flex';
		paragraph.textContent = 'Titre';
		newMediaArray.forEach((media) => {
			handleClickOnMedia(media);
		});
	});
};
