import createElementDOM from './genericDom';

const firstnameInput = document.getElementById('first');
const lastnameInput = document.getElementById('last');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

//regex match
export const setLettersRgxp = /^[a-zA-Z \-àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]+$/;
export const setEmailRgxp =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// valid message function
export const setErrorMsg = (elmt, validMessage) => {
	const parent = elmt.parentElement;
	if (parent.classList.contains('valid')) {
		parent.classList.remove('valid');
	}
	parent.classList.add('error');
	const pTag = parent.querySelector('p');
	pTag.innerText = validMessage;
	pTag.style.color = '#f00';
	pTag.style.fontSize = '15px';
};

// valid message function
export const setValidMsg = (elmt, validMessage) => {
	const parent = elmt.parentElement;
	if (parent.classList.contains('valid')) {
		parent.classList.remove('valid');
	}
	parent.classList.add('valid');
	const pTag = parent.querySelector('p');
	pTag.innerText = validMessage;
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
export const submitForm = (data) => {
	const PhotographerName = createElementDOM('p', '', 'photographer-name');
	const closeForm = createElementDOM('img', '', 'closeForm', [
		{ key: 'src', value: 'assets/icons/close.svg' },
	]);
	const form = document.querySelector('#form');
	const firstname = document.querySelector('.first');
	const lastname = document.querySelector('.last');
	const email = document.querySelector('.email');
	const message = document.querySelector('.message');
	form.addEventListener('submit', (e) => {
		validate();
		e.preventDefault();
		if (
			firstname.classList.contains('valid') &&
			lastname.classList.contains('valid') &&
			email.classList.contains('valid') &&
			message.classList.contains('valid')
		) {
			console.log('Informations du formulaire.');
			console.log('Prénom: ' + firstnameInput.value);
			console.log('Nom: ' + lastnameInput.value);
			console.log('Email: ' + emailInput.value);
			console.log('Message: ' + messageInput.value);

			const main = document.getElementById('main');
			main.style.display = 'none';
			const modal = document.getElementById('contact_modal');
			modal.style.display = 'none';
			const validationMessage = document.querySelector('.validateFormMessage');
			validationMessage.style.display = 'flex';
			PhotographerName.textContent = data[0].name;
			validationMessage.appendChild(PhotographerName);
			validationMessage.appendChild(closeForm);

			closeForm.addEventListener('click', () => {
				validationMessage.style.display = 'none';
				main.style.display = 'block';
				main.style.opacity = '1';
			});
		}
	});
};
