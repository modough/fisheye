import closeModal from './contactForm.js';
const firstnameInput = document.getElementById('first');
const lastnameInput = document.getElementById('last');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

//regex match
export const setLettersRgxp = /^[a-zA-Z]+$/;
export const setEmailRgxp =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// error message function
export const setErrorMsg = (elmt, errorMessage) => {
	const parent = elmt.parentElement;
	if (parent.classList.contains('valid')) {
		parent.classList.remove('valid');
	}
	parent.classList.add('error');
	const pTag = parent.querySelector('p');
	pTag.innerText = errorMessage;
	pTag.style.color = '#f00';
	pTag.style.fontSize = '15px';
};

// valid message function
export const setValidMsg = (elmt, errorMessage) => {
	const parent = elmt.parentElement;
	if (parent.classList.contains('error')) {
		parent.classList.remove('error');
	}
	parent.classList.add('valid');
	const pTag = parent.querySelector('p');
	pTag.innerText = errorMessage;
};

// declare a generic function for most inputs validation
const genericValidate = ({
	input,
	regex = null,
	emptyErr = 'Champ vide !',
	nbErr = 'Champ trop court !',
	regexErr = 'Champ incorrect !',
	isInt = false,
}) => {
	if (input && !input.value) return setErrorMsg(input, emptyErr);
	if (input && input.value.trim() === '') return setErrorMsg(input, emptyErr);
	if (!isInt && input.value.trim().length < 2) return setErrorMsg(input, nbErr);
	if (!regex && input.value.trim().length < 20)
		return setErrorMsg(input, nbErr);
	if (regex && !input.value.trim().match(regex))
		return setErrorMsg(input, regexErr);

	if (isInt && isNaN(input.value)) return setErrorMsg(input, emptyErr);

	return setValidMsg(input, '');
};

// creating function for validation steps
export const validate = () => {
	//firstname validity check
	genericValidate({
		input: firstnameInput,
		regex: setLettersRgxp,
		emptyErr: 'Veuillez renseigner votre prénom !',
		nbErr: 'Veuillez entrer plus de 2 caractères pour le champ du prénom',
		regexErr: 'Veuillez entrer des lettres',
	});
	//lastname validity check
	genericValidate({
		input: lastnameInput,
		regex: setLettersRgxp,
		emptyErr: 'Veuillez renseigner votre nom !',
		nbErr: 'Veuillez entrer plus de 2 caractères pour le champ du nom',
		regexErr: 'Veuillez entrer des lettres',
	});
	//email validity check
	genericValidate({
		input: emailInput,
		regex: setEmailRgxp,
		emptyErr: 'Veuillez renseigner votre email !',
		regexErr: 'Veuillez renseigner un email valide !',
	});
	//message validity check
	genericValidate({
		input: messageInput,
		nbErr: 'Veuillez renseigner 20 caractéres minimum !',
		emptyErr: 'Ecrivez votre message ici !',
	});
};

// Submit form
export const submitForm = () => {
	const form = document.querySelector('#form');
	const firstname = document.querySelector('.first');
	const lastname = document.querySelector('.last');
	const email = document.querySelector('.email');
	const message = document.querySelector('.message');

	form.addEventListener('submit', (e) => {
		validate();
		if (
			firstname.classList.contains('error') ||
			lastname.classList.contains('error') ||
			email.classList.contains('error') ||
			message.classList.contains('error')
		) {
			e.preventDefault();
		} else {
			closeModal();
		}
	});
};
