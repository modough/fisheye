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
		document.querySelector('.photographer-name').textContent = name;
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
		const ahref = document.createElement('a');
		ahref.setAttribute('href', video ? file : img);
		const card = document.createElement('div');
		card.className = 'photoCard';
		const mediaDiv = document.createElement('div');
		mediaDiv.className = 'divImgVideo';
		const videoFile = document.createElement('video');
		videoFile.setAttribute('src', file);
		videoFile.setAttribute('type', 'video/mp4');
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
		ahref.appendChild(card);

		return ahref;
	};
	return { getMediaCardDOM };
}

export function lightbox(data) {
	const { title, video, image, photographerId } = data;

	const img = `assets/medias/${photographerId}/${image}`;
	const file = `assets/medias/${photographerId}/${video}`;

	const getLightboxDOM = () => {
		const closeBtn = document.createElement('i');
		const leftChevron = document.createElement('i');
		const rightChevron = document.createElement('i');
		const lightboxMediaDiv = document.createElement('div');
		const lightboxVideo = document.createElement('video');
		lightboxVideo.src = file;
		const lightboxImage = document.createElement('img');
		lightboxImage.src = img;
		const mediaTitle = document.createElement('p');
		mediaTitle.innerText = title;
		closeBtn.classList.add('fa-close');
		leftChevron.classList.add('fa-chevron-left');
		rightChevron.classList.add('fa-chevron-right');
		lightboxMediaDiv.classList.add('lightbox_medias');
		video
			? lightboxMediaDiv.appendChild(lightboxVideo)
			: lightboxMediaDiv.appendChild(lightboxImage);
		lightboxMediaDiv.appendChild(mediaTitle);
		return { closeBtn, leftChevron, rightChevron, lightboxMediaDiv };
	};
	return { getLightboxDOM };
}
