import { professionalInfos, professionalMedias } from '../factories/medias.js';
import contactForm from '../utils/contactForm.js';
import { submitForm } from '../utils/contactFormValidation.js';
import { fetchData } from '../utils/fetchdata.js';

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

// lightbox
const displayLightbox = () => {
	const lightboxDiv = document.querySelector('#lightbox');
	const mediaLinks = document.querySelectorAll('a[href$=".jpg"]');
	const videoLinks = document.querySelectorAll('a[href$=".mp4"]');
	const closeBtn = document.createElement('i');
	const leftChevron = document.createElement('i');
	const rightChevron = document.createElement('i');
	closeBtn.className = 'fa fa-close';
	leftChevron.className = 'fas fa-chevron-left';
	rightChevron.className = 'fas fa-chevron-right';

	mediaLinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			lightboxDiv.classList.add('active');
			const img = document.createElement('img');
			img.src = link.href;
			const imgDiv = document.createElement('div');
			imgDiv.classList.add('lightbox_medias');
			while (lightboxDiv.firstChild) {
				lightboxDiv.removeChild(lightboxDiv.firstChild);
			}
			imgDiv.appendChild(img);
			lightboxDiv.appendChild(imgDiv);
			lightboxDiv.appendChild(closeBtn);
			lightboxDiv.appendChild(leftChevron);
			lightboxDiv.appendChild(rightChevron);
		});
	});
	videoLinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			lightboxDiv.classList.add('active');
			const video = document.createElement('video');
			video.src = link.href;
			const imgDiv = document.createElement('div');
			imgDiv.classList.add('lightbox_medias');
			while (lightboxDiv.firstChild) {
				lightboxDiv.removeChild(lightboxDiv.firstChild);
			}
			imgDiv.appendChild(video);
			lightboxDiv.appendChild(imgDiv);
			lightboxDiv.appendChild(closeBtn);
			lightboxDiv.appendChild(leftChevron);
			lightboxDiv.appendChild(rightChevron);
		});
	});

	closeBtn.addEventListener('click', () => {
		lightboxDiv.classList.remove('active');
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
