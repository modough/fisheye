import createElementDOM from '../utils/genericDom';

export default function photographerFactory(data) {
	const { id, name, portrait, city, tagline, price, country } = data;

	const picture = `assets/photographers/${portrait}`;
	const ahref = `./photographer.html?id=${id}`;

	// Dom elements such as profil pic, name, city... for all photographers on main page
	const getUserCardDOM = () => {
		const photographId = createElementDOM('a', '', '', [
			{ key: 'href', value: ahref },
		]);
		const article = document.createElement('article');
		const imgDiv = createElementDOM('div', '', 'imageDiv');
		const bottomDiv = createElementDOM('div', '', 'bottomDiv');
		const img = createElementDOM('img', '', '', [
			{ key: 'src', value: picture },
		]);
		const ville = createElementDOM('h3', `${city}`);
		const slogan = createElementDOM('p', `${tagline}`);
		const prix = createElementDOM('span', `${price}€/jour`);
		const h2 = createElementDOM('h2', `${name}`);

		imgDiv.appendChild(img);
		bottomDiv.appendChild(h2);
		bottomDiv.appendChild(ville);
		bottomDiv.appendChild(slogan);
		bottomDiv.appendChild(prix);
		article.appendChild(imgDiv);
		article.appendChild(bottomDiv);
		photographId.appendChild(article);
		return photographId;
	};

	// Dom elements such as profil pic, name, city... for a single photographer on photographer's page
	const getHeaderCardDOM = () => {
		const parentDiv = document.createElement('div');
		const locality = createElementDOM('div', '', 'location');
		const img = createElementDOM('img', '', '', [
			{ key: 'src', value: picture },
		]);
		const ville = createElementDOM('h3', `${city}`);
		const pays = createElementDOM('h3', `${country}`, 'country');
		const slogan = createElementDOM('p', `${tagline}`);
		const h2 = createElementDOM('h2', `${name}`);
		document.querySelector('.photographer-name').textContent = name;
		const btn = createElementDOM(
			'button',
			'Contactez-moi',
			'contact_button header_button'
		);
		const infos = createElementDOM('div', '', 'contact-userInfo');

		locality.appendChild(ville);
		locality.appendChild(pays);
		infos.appendChild(h2);
		infos.appendChild(locality);
		infos.appendChild(slogan);
		parentDiv.appendChild(infos);
		parentDiv.appendChild(btn);
		parentDiv.appendChild(img);
		return parentDiv;
	};
	return { getUserCardDOM, getHeaderCardDOM };
}
