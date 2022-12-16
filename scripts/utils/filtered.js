import {
	displayPhotographPageMedia,
	displayLightbox,
} from '../pages/photographer';
import createElementDOM from './genericDom';
import handleClickOnMedia from './lightbox';

export const filtered = (media) => {
	const main = document.querySelector('#main');
	const parentFilterDiv = document.querySelector('.trierDiv');
	const mainDivParent = createElementDOM('div', '', 'mainDivParent');
	const populariteDiv = document.querySelector('.popularite');
	const hideFilterArrow = document.querySelector('.fa-angle-up');
	const showFilterArrow = createElementDOM('i', '', 'fas fa-angle-down');
	const sortMainDiv = createElementDOM('div', '', 'oneFilterOnly', [
		{ key: 'tabindex', value: '0' },
	]);
	const paragraph = createElementDOM('p', 'Popularité', '');
	const hiddenDiv = document.querySelector('.trierOption');
	const dateDiv = document.querySelector('.date');
	const titreDiv = document.querySelector('.titre');
	sortMainDiv.appendChild(paragraph);
	mainDivParent.appendChild(sortMainDiv);
	mainDivParent.appendChild(showFilterArrow);
	parentFilterDiv.appendChild(mainDivParent);

	// creating generic function
	const handleSort = (sortBy, title) => {
		const newMediaArray = Array.from(media).sort(sortBy);
		displayPhotographPageMedia(newMediaArray);
		hiddenDiv.style.display = 'none';
		sortMainDiv.style.display = 'flex';
		paragraph.textContent = title;
		displayLightbox(newMediaArray);
		handleClickOnMedia(newMediaArray);
	};
	const openFilter = () => {
		hiddenDiv.style.display = 'block';
		sortMainDiv.style.display = 'none';
		main.setAttribute('aria-hidden', 'true');
		hiddenDiv.setAttribute('aria-hidden', 'false');
		populariteDiv.focus();
	};
	const closeFilter = () => {
		main.setAttribute('aria-hidden', 'false');
		hiddenDiv.style.display = 'none';
		hiddenDiv.setAttribute('aria-hidden', 'true');
		sortMainDiv.style.display = 'flex';
	};

	// onClick function
	hideFilterArrow.addEventListener('click', () => {
		closeFilter();
	});
	sortMainDiv.addEventListener('click', () => {
		openFilter();
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
	hideFilterArrow.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			closeFilter();
		}
	});
	sortMainDiv.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			openFilter();
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
