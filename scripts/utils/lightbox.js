// lightbox
export const handleClickOnMedia = () => {
	const lightbox = document.querySelector('#lightbox');
	const children = Array.from(document.querySelectorAll('.lightbox_medias'));
	const main = document.querySelector('#main');
	const links = document.querySelectorAll('#photos .divImgVideo');
	const closeBtn = document.querySelector('.fa-close');
	const leftChevron = document.querySelector('.fa-chevron-left');
	const rightChevron = document.querySelector('.fa-chevron-right');

	// here we display the lightbox and the image clicked on with the 'index' for links
	// it has to match 'index' of children array before adding 'active'
	links.forEach((link, index) => {
		link.addEventListener('click', () => {
			open(index);
		});
		link.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') {
				open(index);
			}
		});
	});

	// open lightbox
	const open = (index) => {
		main.setAttribute('aria-hidden', 'true');
		lightbox.classList.add('active');
		lightbox.setAttribute('aria-hidden', 'false');
		const selectedElement = document.querySelectorAll(
			'.lightbox_medias.active'
		)[0];
		selectedElement?.classList.remove('active');
		children[index]?.classList.add('active');
		children[index].setAttribute('aria-current', 'media de lightbox');
		closeBtn.focus();
	};
	// we close the lightbox and remove all active classes
	const close = () => {
		main.setAttribute('aria-hidden', 'false');
		lightbox.classList.remove('active');
		lightbox.setAttribute('aria-hidden', 'true');
		const selectedElement = document.querySelectorAll(
			'.lightbox_medias.active'
		)[0];
		selectedElement?.classList.remove('active');
	};

	// here we toggle the active class throughout the array to display image per image
	const previous = () => {
		const selectedElement = document.querySelectorAll(
			'.lightbox_medias.active'
		)[0];
		let indexOfElmt = children.indexOf(selectedElement);

		if (indexOfElmt === 0) {
			indexOfElmt = children.length;
		}
		const prevElement = children[indexOfElmt - 1];
		prevElement?.classList.add('active');
		prevElement.setAttribute('aria-current', 'media de lightbox');

		selectedElement.classList.remove('active');
		selectedElement?.removeAttribute('aria-current');
	};
	const next = () => {
		const selectedElement = document.querySelectorAll(
			'.lightbox_medias.active'
		)[0];
		let indexOfElmt = children.indexOf(selectedElement);

		if (indexOfElmt === children.length - 1) {
			indexOfElmt = -1;
		}
		const nextElement = children[indexOfElmt + 1];
		nextElement.classList.add('active');
		nextElement.setAttribute('aria-current', 'media de lightbox');
		selectedElement?.classList.remove('active');
		selectedElement?.removeAttribute('aria-current');
	};

	// on click event
	closeBtn.addEventListener('click', () => {
		close();
	});

	rightChevron.addEventListener('click', () => {
		next();
	});

	leftChevron.addEventListener('click', () => {
		previous();
	});

	// handle Keyboard navigation
	closeBtn.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			close();
		}
	});
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			close();
		}
	});
	rightChevron.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			next();
		}
	});
	leftChevron.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			previous();
		}
	});
};
export default handleClickOnMedia;
