// lightbox
export const handleClickOnMedia = () => {
	const lightbox = document.querySelector('#lightbox');
	const children = Array.from(document.querySelectorAll('.lightbox_medias'));
	const links = document.querySelectorAll(
		'img[src$="jpg"], video[src$=".mp4"]'
	);

	const leftChevron = document.querySelector('.fa-chevron-left');
	const rightChevron = document.querySelector('.fa-chevron-right');
	links.forEach((link, index) =>
		link.addEventListener('click', (e) => {
			e.preventDefault();
			lightbox.classList.add('active');
			children[index - 1].classList.add('active');
		})
	);

	const closeBtn = document.querySelector('.fa-close');
	closeBtn.addEventListener('click', () => {
		lightbox.classList.remove('active');
		const selectedElement = document.querySelectorAll(
			'.lightbox_medias.active'
		)[0];
		selectedElement.classList.remove('active');
	});

	rightChevron.addEventListener('click', () => {
		const selectedElement = document.querySelectorAll(
			'.lightbox_medias.active'
		)[0];
		let indexElmt = children.indexOf(selectedElement);

		if (indexElmt === children.length - 1) {
			console.log(indexElmt);
			indexElmt = -1;
		}
		selectedElement.classList.remove('active');
		const nextElement = children[indexElmt + 1];
		nextElement.classList.add('active');
	});
	leftChevron.addEventListener('click', () => {
		const selectedElement = document.querySelectorAll(
			'.lightbox_medias.active'
		)[0];
		let indexElmt = children.indexOf(selectedElement);

		if (indexElmt === 0) {
			indexElmt = children.length;
		}
		selectedElement.classList.remove('active');
		const nextElement = children[indexElmt - 1];
		nextElement.classList.add('active');
	});
};
export default handleClickOnMedia;

/*export const displayLightbox = () => {
	const lightboxDiv = document.querySelector('#lightbox');

	const imageLinks = document.querySelectorAll('a[href$=".jpg"]');
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
		}
		titre.id = 'lightboxTitle';
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

	imageLinks.forEach((link) => {
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
	const mediaLinks = Array.from(
		document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]')
	);
	console.log(mediaLinks);
	let index = 1;
	rightChevron.addEventListener('click', () => {
		if (index === mediaLinks.length - 1) {
			index = 0;
			console.log(index);
		} else {
			index++;
			console.log(index);
		}

		const imageIndex = document.getElementById('lightboxMedia');

		const lightboxTitle = document.getElementById('lightboxTitle');
		imageIndex.src = mediaLinks[index];
		lightboxTitle.textContent = mediaLinks[index].title;
	});
	leftChevron.addEventListener('click', () => {
		if (index === 0) {
			index = mediaLinks.length - 1;
		} else {
			index--;
		}

		const imageIndex = document.getElementById('lightboxMedia');
		const lightboxTitle = document.getElementById('lightboxTitle');
		imageIndex.src = mediaLinks[index];
		lightboxTitle.textContent = mediaLinks[index].title;
	});
};
export default displayLightbox;*/
