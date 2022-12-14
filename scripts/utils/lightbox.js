// lightbox
export const handleClickOnMedia = () => {
	const lightbox = document.querySelector('#lightbox');
	const children = Array.from(document.querySelectorAll('.lightbox_medias'));

	const links = document.querySelectorAll('#photos img, video');
	const closeBtn = document.querySelector('.fa-close');
	const leftChevron = document.querySelector('.fa-chevron-left');
	const rightChevron = document.querySelector('.fa-chevron-right');

	// here we display the lightbox and the image clicked on with the 'index' for links
	// it has to match 'index' of children array before adding 'active'
	links.forEach((link, index) =>
		link.addEventListener('click', (e) => {
			e.preventDefault();
			open(index);
		})
	);

	// open lightbox
	const open = (index) => {
		lightbox.classList.add('active');
		children[index]?.classList.add('active');
	};
	// we close the lightbox and remove all active classes
	const close = () => {
		lightbox.classList.remove('active');
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

		const nextElement = children[indexOfElmt - 1];
		nextElement?.classList.add('active');
		selectedElement.classList.remove('active');
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
		selectedElement?.classList.remove('active');
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
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			lightbox.classList.add('active');
			children[0].classList.add('active');
		}
		if (e.key === 'Escape') {
			close();
		}
		if (e.key === 'ArrowRight') {
			next();
		}
		if (e.key === 'ArrowLeft') {
			previous();
		}
	});
};
export default handleClickOnMedia;
