export default function photographerHeader(data) {
	const { name, portrait, city, country, tagline } = data;

	const picture = `assets/photographers/${portrait}`;

	function getUserCardDOM() {
		const parent = document.createElement('div');
		const locality = document.createElement('div');
		const img = document.createElement('img');
		const ville = document.createElement('h3');
		const pays = document.createElement('h3');
		const slogan = document.createElement('p');

		const h2 = document.createElement('h2');
		const btn = document.createElement('button');
		const infos = document.createElement('div');

		img.setAttribute('src', picture);
		ville.innerText = `${city},`;
		pays.innerText = country;
		pays.className = 'country';
		slogan.innerText = tagline;
		btn.innerText = 'Contactez-moi';
		btn.className = 'contact_button header_button';
		h2.textContent = name;
		locality.className = 'location';
		locality.appendChild(ville);
		locality.appendChild(pays);

		infos.className = 'contact-userInfo';
		infos.appendChild(h2);
		infos.appendChild(locality);
		infos.appendChild(slogan);

		parent.appendChild(infos);

		parent.appendChild(btn);
		parent.appendChild(img);
		return parent;
	}
	return { getUserCardDOM };
}
