/*export const lightboxDisplay = (elmt) => {
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

	const handleClickOnMedia = () => {
		const mediaLinks = document.querySelectorAll(
			'a[href$=".jpg"], a[href$=".mp4"]'
		);

		mediaLinks.forEach((link) => {
			console.log(link);
			link.addEventListener('click', (e) => {
				e.preventDefault();
				lightboxDiv.classList.add('active');
				while (lightboxDiv.firstChild) {
					lightboxDiv.removeChild(lightboxDiv.firstChild);
				}
			});
		});
		closeBtn.addEventListener('click', () => {
			lightboxDiv.classList.remove('active');
		});
		// right and left click on lightbox slide
		const mediaLinksArray = Array.from(document.querySelectorAll('a'));
		console.log(mediaLinksArray);
		let index = 1;
		rightChevron.addEventListener('click', () => {
			if (index > mediaLinksArray.length) {
				index = 1;
			} else {
				index++;
			}

			const imageIndex = document.getElementById(
				elmt.type === 'video' ? 'lightboxVideo' : 'lightboxImg'
			);

			imageIndex.src = mediaLinksArray[index];
			console.log('*******************');
			console.log(index);
		});
		leftChevron.addEventListener('click', () => {
			if (index < 0) {
				index = mediaLinksArray.length;
			} else {
				index--;
			}
			const imageIndex = document.getElementById(
				elmt.type === 'video' ? 'lightboxVideo' : 'lightboxImg'
			);
			imageIndex.src = mediaLinksArray[index];
			console.log('------------------');
			console.log(imageIndex);
		});
	};

	// closing lightbox

	return handleClickOnMedia();
};

//display lightbox

const createLightbox = (media) => {
	const lightboxDiv = document.querySelector('#lightbox');
	console.log(media);
	media.forEach((link) => {
		const lightboxModel = mediaFactory(link);
		const lightboxCardDOM = lightboxModel.getLightboxCardDOM();
		lightboxDiv.appendChild(lightboxCardDOM);
		lightboxDisplay(link);
	});
};

//-------------------------------------------------------------
export const displayLightbox = (media) => {
	console.log(media);
	const lightboxDiv = document.querySelector('#lightbox');

	const titre = document.createElement('p');
	const closeBtn = document.createElement('i');
	const leftChevron = document.createElement('i');
	const rightChevron = document.createElement('i');

	closeBtn.className = 'fa fa-close';
	leftChevron.className = 'fas fa-chevron-left';
	rightChevron.className = 'fas fa-chevron-right';

	media.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			lightboxDiv.classList.add('active');
			const img = document.createElement('img');
			const videos = document.createElement('video');
			const source = document.createElement('source');
			img.id = 'lightboxImg';
			img.type = 'img/jpg';
			img.src = link.image;
			videos.id = 'lightboxVideo';
			videos.controls = true;
			source.type = 'video/mp4';
			source.src = link.video;

			titre.innerText = link.title;

			const imgDiv = document.createElement('div');
			imgDiv.classList.add('lightbox_medias');
			while (lightboxDiv.firstChild) {
				lightboxDiv.removeChild(lightboxDiv.firstChild);
			}
			videos.appendChild(source);
			media.video ? imgDiv.appendChild(img) : imgDiv.appendChild(videos);
			lightboxDiv.appendChild(imgDiv);
			lightboxDiv.appendChild(closeBtn);
			lightboxDiv.appendChild(leftChevron);
			lightboxDiv.appendChild(rightChevron);
			imgDiv.appendChild(titre);
		});
	});

	// closing lightbox
	closeBtn.addEventListener('click', () => {
		lightboxDiv.classList.remove('active');
		index = 0;
	});

	// right and left click on lightbox slide
	const mediaLinks = Array.from(media);
	console.log(mediaLinks);
	let index = 0;
	rightChevron.addEventListener('click', () => {
		if (index > mediaLinks.length) {
			index = 1;
		} else {
			index++;
		}

		const imageIndex = document.getElementById(
			media.video ? 'lightboxVideo' : 'lightboxImg'
		);

		imageIndex.src = mediaLinks[index];
	});
	leftChevron.addEventListener('click', () => {
		if (index < 0) {
			index = mediaLinks.length;
		} else {
			index--;
		}

		const imageIndex = document.getElementById('lightboxVideo');
		imageIndex.src = mediaLinks[index];
	});
};
export default displayLightbox;

//DOM

const getLightboxCardDOM = () => {
	const mediaDiv = createElementDOM('div', '', 'lightbox_medias');
	if (image !== undefined && image !== null) {
		const img = createElementDOM('img', '', 'lightboxImg', [
			{ key: 'src', value: picture },
		]);
		mediaDiv.appendChild(img);
	} else if (video !== undefined && video !== null) {
		const mp4 = createElementDOM('video', '', 'lightboxVideo', [
			{ key: 'title', value: title },
			{ key: 'controls', value: 'true' },
		]);
		const src = createElementDOM('source', '', '', [
			{ key: 'src', value: file },
			{ key: 'type', value: 'video/mp4' },
		]);
		mp4.appendChild(src);
		mediaDiv.appendChild(mp4);
	}
	const titleImg = createElementDOM('p', `${title}`);

	mediaDiv.appendChild(titleImg);

	return mediaDiv;
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
	console.log(media);
	media.forEach((link) => {
		const lightboxModel = mediaFactory(link);
		const lightboxCardDOM = lightboxModel.getLightboxCardDOM();
		lightboxDiv.appendChild(lightboxCardDOM);
	});
};

////////////////////////
console.log(medias[7].image);
const lightboxDiv = document.querySelector('#lightbox');
const mediaLinks = document.querySelectorAll('a[href$=".jpg"]');
const videoLinks = document.querySelectorAll('a[href$=".mp4"]');

const titre = document.createElement('p');
const closeBtn = document.createElement('i');
const leftChevron = document.createElement('i');
const rightChevron = document.createElement('i');

closeBtn.className = 'fa fa-close';
leftChevron.className = 'fas fa-chevron-left';
rightChevron.className = 'fas fa-chevron-right';

const handleClickOnMedia = (link, type) => {
	lightboxDiv.classList.add('active');
	let source;
	const media = document.createElement(type);

	media.id = 'lightboxMedia';
	media.type = type === 'video' ? 'video/mp4' : 'img/jpg';
	if (media.type === 'video/mp4') {
		media.controls = true;
		source = document.createElement('source');
		source.type = 'video/mp4';
		source.src = link.href;
	} else {
		media.src = link.href;
		console.log(link.href);
	}
	titre.innerText = link.title;
	const mediaDiv = document.createElement('div');
	mediaDiv.classList.add('lightbox_medias');
	while (lightboxDiv.firstChild) {
		lightboxDiv.removeChild(lightboxDiv.firstChild);
	}
	if (source) media.appendChild(source);
	mediaDiv.appendChild(media);
	mediaDiv.appendChild(titre);
	lightboxDiv.appendChild(mediaDiv);
	lightboxDiv.appendChild(closeBtn);
	lightboxDiv.appendChild(leftChevron);
	lightboxDiv.appendChild(rightChevron);
};

mediaLinks.forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		handleClickOnMedia(link, 'img');
	});
});
videoLinks.forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		handleClickOnMedia(link, 'video');
	});
});

// closing lightbox
closeBtn.addEventListener('click', () => {
	lightboxDiv.classList.remove('active');
});

// right and left click on lightbox slide

rightChevron.addEventListener('click', () => {
	for (let i in medias) {
		if (i >= medias.length) {
			i = 0;
		} else {
			i++;
		}

		const imageIndex = document.getElementById('lightboxMedia');

		imageIndex.src = medias[7].image;
	}
});
leftChevron.addEventListener('click', () => {
	for (let i in medias) {
		if (i <= 0) {
			i = medias.length;
		} else {
			i--;
		}

		const imageIndex = document.getElementById('lightboxMedia');
		imageIndex.src = medias[9].image;
	}
});*/
