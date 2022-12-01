// display contact form
export default function contactForm() {
	const main = document.querySelector('#main');
	const modal = document.getElementById('contact_modal');
	const contactButton = document.querySelector('.contact_button');
	// open contact form
	contactButton.addEventListener('click', () => {
		modal.style.display = 'block';
		main.style.opacity = '.3';
	});

	// close contact form
	const closeModalButton = document.querySelector('.closeModal-btn');
	closeModalButton.addEventListener('click', () => {
		modal.style.display = 'none';
		main.style.opacity = '1';
	});
}
