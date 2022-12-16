// display contact form
export default function contactForm() {
	const main = document.querySelector('#main');
	const modal = document.getElementById('contact_modal');
	const contactButton = document.querySelector('.contact_button');
	const closeModalButton = document.querySelector('.closeModal-btn');
	// open contact form
	const openFunction = () => {
		modal.style.display = 'block';
		modal.setAttribute('aria-hidden', 'false');
		main.style.opacity = '.3';
		main.setAttribute('aria-hidden', 'true');
		closeModalButton.focus();
	};
	const closeFunction = () => {
		modal.style.display = 'none';
		main.style.opacity = '1';
		modal.setAttribute('aria-hidden', 'true');
		main.setAttribute('aria-hidden', 'false');
	};

	contactButton.addEventListener('click', () => {
		openFunction();
	});
	contactButton.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			openFunction();
		}
	});

	// close contact form
	closeModalButton.addEventListener('click', () => {
		closeFunction();
	});
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			closeFunction();
		}
	});
}
