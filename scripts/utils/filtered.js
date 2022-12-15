import {
	displayPhotographPageMedia,
	displayLightbox,
} from '../pages/photographer';
import createElementDOM from './genericDom';
import handleClickOnMedia from './lightbox';

export const filtered = (media) => {
	const parentFilterDiv = document.querySelector('.trierDiv');
	const mainDivParent = createElementDOM('div', '', 'mainDivParent');
	const populariteDiv = document.querySelector('.popularite');
	const hideFilterArrow = document.querySelector('.fa-angle-up');
	const showFilterArrow = createElementDOM('i', '', 'fas fa-angle-down');
	const sortMainDiv = createElementDOM('div', '', 'oneFilterOnly');
	const paragraph = createElementDOM('p', 'Popularité', '', [
		{ key: 'tabindex', value: '0' },
	]);
	const hiddenDiv = document.querySelector('.trierOption');
	const dateDiv = document.querySelector('.date');
	const titreDiv = document.querySelector('.titre');
	sortMainDiv.appendChild(paragraph);
	mainDivParent.appendChild(sortMainDiv);
	mainDivParent.appendChild(showFilterArrow);
	parentFilterDiv.appendChild(mainDivParent);

	const handleSort = (sortBy, title) => {
		const newMediaArray = Array.from(media).sort(sortBy);
		displayPhotographPageMedia(newMediaArray);
		hiddenDiv.style.display = 'none';
		sortMainDiv.style.display = 'flex';
		paragraph.textContent = title;
		displayLightbox(newMediaArray);
		handleClickOnMedia(newMediaArray);
	};

	showFilterArrow.addEventListener('click', () => {
		hiddenDiv.style.display = 'block';
		sortMainDiv.style.display = 'none';
	});
	hideFilterArrow.addEventListener('click', () => {
		hiddenDiv.style.display = 'none';
		sortMainDiv.style.display = 'flex';
	});
	sortMainDiv.addEventListener('click', () => {
		hiddenDiv.style.display = 'block';
		sortMainDiv.style.display = 'none';
	});

	populariteDiv.addEventListener('click', () => {
		handleSort((a, b) => {
			return b.likes - a.likes;
		}, 'Popularité');
	});
	dateDiv.addEventListener('click', () => {
		handleSort((a, b) => {
			return new Date(b.date) - new Date(a.date);
		}, 'Date');
	});
	titreDiv.addEventListener('click', () => {
		handleSort((a, b) => {
			return a.title.localeCompare(b.title);
		}, 'Titre');
	});

	// handling keyboard events
	showFilterArrow.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			hiddenDiv.style.display = 'block';
			sortMainDiv.style.display = 'none';
		}
	});
	hideFilterArrow.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			hiddenDiv.style.display = 'none';
			sortMainDiv.style.display = 'flex';
		}
	});
	sortMainDiv.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			hiddenDiv.style.display = 'block';
			sortMainDiv.style.display = 'none';
		}
	});
	populariteDiv.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			handleSort((a, b) => {
				return b.likes - a.likes;
			}, 'Popularité');
		}
	});
	dateDiv.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			handleSort((a, b) => {
				return new Date(b.date) - new Date(a.date);
			}, 'Date');
		}
	});
	titreDiv.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			handleSort((a, b) => {
				return a.title.localeCompare(b.title);
			}, 'Titre');
		}
	});
};
