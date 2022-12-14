// display contact form
export default function contactForm() {
	const main = document.querySelector('#main');
	const modal = document.getElementById('contact_modal');
	const contactButton = document.querySelector('.contact_button');
	// open contact form
	const openFunction = () => {
		modal.style.display = 'block';
		main.style.opacity = '.3';
	};
	const closeFunction = () => {
		modal.style.display = 'none';
		main.style.opacity = '1';
	};

	contactButton.addEventListener('click', () => {
		openFunction();
	});

	// close contact form
	const closeModalButton = document.querySelector('.closeModal-btn');
	closeModalButton.addEventListener('click', () => {
		closeFunction();
	});
	document.addEventListener('keydown', (e) => {
		if (e.key === 'o') {
			openFunction();
		}
		if (e.key === 'x') {
			closeFunction();
		}
	});
}
