// lightbox
export const displayLightbox = () => {
	const lightboxDiv = document.querySelector('#lightbox');
	const imageLinks = document.querySelectorAll('a[href$=".jpg"]');
	const videoLinks = document.querySelectorAll('a[href$=".mp4"]');
	console.log(imageLinks);
	const closeBtn = document.createElement('i');
	const leftChevron = document.createElement('i');
	const rightChevron = document.createElement('i');
	closeBtn.className = 'fa fa-close';
	leftChevron.className = 'fas fa-chevron-left';
	rightChevron.className = 'fas fa-chevron-right';

	imageLinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			lightboxDiv.classList.add('active');
			const img = document.createElement('img');
			img.id = 'lightboxMedia';
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
			const videos = document.createElement('video');
			const source = document.createElement('source');
			videos.id = 'lightboxMedia';
			source.type = 'video/mp4';
			source.src = link.href;
			const imgDiv = document.createElement('div');
			imgDiv.classList.add('lightbox_medias');
			while (lightboxDiv.firstChild) {
				lightboxDiv.removeChild(lightboxDiv.firstChild);
			}
			videos.appendChild(source);
			imgDiv.appendChild(videos);
			lightboxDiv.appendChild(imgDiv);
			lightboxDiv.appendChild(closeBtn);
			lightboxDiv.appendChild(leftChevron);
			lightboxDiv.appendChild(rightChevron);
		});
	});

	closeBtn.addEventListener('click', () => {
		lightboxDiv.classList.remove('active');
	});
	const mediaLinks = Array.from(
		document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]')
	);
	console.log(mediaLinks);
	let index = 1;
	rightChevron.addEventListener('click', () => {
		if (index + 1 >= mediaLinks.length) {
			index = 0;
		} else {
			index++;
		}

		const imageIndexee = document.getElementById('lightboxMedia');

		imageIndexee.src = mediaLinks[index];
		console.log('*******************');
		console.log(index);
	});
	leftChevron.addEventListener('click', () => {
		if (index - 1 <= 0) {
			index = mediaLinks.length - 1;
		} else {
			index = index - 1;
		}
		const imageIndexee = document.getElementById('lightboxMedia');
		imageIndexee.src = mediaLinks[index];
		console.log('------------------');
		console.log(imageIndexee);
	});
};
