export function professionalInfos(data) {
	const { name, portrait, city, country, tagline } = data;

	const picture = `assets/photographers/${portrait}`;

	const getInfoCardDOM = () => {
		const parentDiv = document.createElement('div');
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
		parentDiv.appendChild(infos);
		parentDiv.appendChild(btn);
		parentDiv.appendChild(img);
		return parentDiv;
	};
	return { getInfoCardDOM };
}

export function professionalMedias(data) {
	const { title, image, likes, video, photographerId } = data;

	const img = `assets/medias/${photographerId}/${image}`;
	const file = `assets/medias/${photographerId}/${video}`;

	const getMediaCardDOM = () => {
		const card = document.createElement('div');
		card.className = 'photoCard';
		const mediaDiv = document.createElement('div');
		mediaDiv.className = 'divImgVideo';
		const videoFile = document.createElement('video');
		videoFile.setAttribute('src', file);
		const imageFile = document.createElement('img');
		imageFile.setAttribute('src', img);

		video
			? (mediaDiv.appendChild(videoFile),
			  (mediaDiv.className = 'divImgVideo photoCardLink'))
			: mediaDiv.appendChild(imageFile);

		const infoDiv = document.createElement('div');
		infoDiv.className = 'bottomCard';
		const titre = document.createElement('h2');
		titre.innerText = title;
		const likeSpan = document.createElement('span');
		const like = document.createElement('p');
		like.className = 'numberOfLikes';
		like.innerText = likes;
		const heart = document.createElement('i');
		heart.className = 'fas fa-heart';
		likeSpan.appendChild(like);
		likeSpan.appendChild(heart);
		infoDiv.appendChild(titre);
		infoDiv.appendChild(likeSpan);
		card.appendChild(mediaDiv);
		card.appendChild(infoDiv);

		return card;
	};
	return { getMediaCardDOM };
}
