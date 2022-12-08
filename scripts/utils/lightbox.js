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
			lightbox.classList.add('active');
			children[index]?.classList.add('active');
		})
	);
	// we close the lightbox and remove all active classes
	closeBtn.addEventListener('click', () => {
		lightbox.classList.remove('active');
		const selectedElement = document.querySelectorAll(
			'.lightbox_medias.active'
		)[0];
		selectedElement?.classList.remove('active');
	});

	// here we toggle the active class to display image per image
	rightChevron.addEventListener('click', () => {
		const selectedElement = document.querySelectorAll(
			'.lightbox_medias.active'
		)[0];
		let indexOfElmt = children.indexOf(selectedElement);

		if (indexOfElmt === children.length - 1) {
			indexOfElmt = -1;
		}
		selectedElement.classList.remove('active');
		const nextElement = children[indexOfElmt + 1];
		nextElement.classList.add('active');
	});

	leftChevron.addEventListener('click', () => {
		const selectedElement = document.querySelectorAll(
			'.lightbox_medias.active'
		)[0];
		let indexOfElmt = children.indexOf(selectedElement);

		if (indexOfElmt === 0) {
			indexOfElmt = children.length;
		}
		selectedElement.classList.remove('active');
		const nextElement = children[indexOfElmt - 1];
		nextElement.classList.add('active');
	});

	// handle Keyboard navigation

	document.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			lightbox.classList.add('active');
			children[0].classList.add('active');
		}
		if (e.key === 'Escape') {
			lightbox.classList.remove('active');
			const selectedElement = document.querySelectorAll(
				'.lightbox_medias.active'
			)[0];
			selectedElement.classList.remove('active');
		}
		if (e.key === 'ArrowRight') {
			const selectedElement = document.querySelectorAll(
				'.lightbox_medias.active'
			)[0];
			let indexOfElmt = children.indexOf(selectedElement);

			if (indexOfElmt === children.length - 1) {
				indexOfElmt = -1;
			}
			selectedElement.classList.remove('active');
			const nextElement = children[indexOfElmt + 1];
			nextElement.classList.add('active');
		}
		if (e.key === 'ArrowLeft') {
			const selectedElement = document.querySelectorAll(
				'.lightbox_medias.active'
			)[0];
			let indexOfElmt = children.indexOf(selectedElement);

			if (indexOfElmt === 0) {
				indexOfElmt = children.length;
			}
			selectedElement.classList.remove('active');
			const nextElement = children[indexOfElmt - 1];
			nextElement.classList.add('active');
		}
	});
};
export default handleClickOnMedia;
