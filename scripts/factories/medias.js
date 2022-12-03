import createElementDOM from '../utils/genericDom';

export function mediaFactory(data) {
	const { title, image, likes, video, photographerId } = data;

	const picture = `assets/medias/${photographerId}/${image}`;
	const file = `assets/medias/${photographerId}/${video}`;

	// Dom elements such as images and videos on photographer's page
	const getMediaCardDOM = () => {
		const ahref = createElementDOM('a', '', '', [
			{ key: 'href', value: video ? file : picture },
			{ key: 'type', value: video ? 'video/mp4' : 'img' },
			{ key: 'title', value: title },
			{ key: 'index', value: 0 },
		]);
		const card = createElementDOM('div', '', 'photoCard');
		const mediaDiv = createElementDOM(
			'div',
			'',
			video ? 'divImgVideo photoCardLink' : 'divImgVideo'
		);
		const playIcon = createElementDOM('i', '', 'fas fa-play');
		video
			? (playIcon.style.display = 'block')
			: (playIcon.style.display = 'none');
		const mediaFile = createElementDOM(video ? 'video' : 'img', '', '', [
			{ key: 'src', value: video ? file : picture },
			{ key: 'type', value: video ? 'video/mp4' : 'img/jpg' },
			{ key: 'aria-label', value: 'vous accedez à la lightbox' },
		]);
		const infoDiv = createElementDOM('div', '', 'bottomCard');
		const titre = createElementDOM('h2', `${title}`);
		const likeSpan = createElementDOM('span', '', 'likeSpan');
		const like = createElementDOM('p', `${likes}`, 'numberOfLikes');
		const heart = createElementDOM('i', '', 'fas fa-heart heartInCard');
		mediaDiv.appendChild(playIcon);
		mediaDiv.appendChild(mediaFile);
		likeSpan.appendChild(like);
		likeSpan.appendChild(heart);
		infoDiv.appendChild(titre);
		infoDiv.appendChild(likeSpan);
		ahref.appendChild(mediaDiv);
		card.appendChild(ahref);
		card.appendChild(infoDiv);

		return card;
	};

	// Dom elements such as images and videos on lightbox
	const getLightboxCardDOM = () => {
		const mediaDiv = createElementDOM('div', '', 'lightbox_medias');
		if (image) {
			const img = createElementDOM('img', '', 'lightboxImg', [
				{ key: 'src', value: picture },
				{ key: 'alt', value: title },
			]);
			mediaDiv.appendChild(img);
		} else if (video) {
			const mp4 = createElementDOM('video', '', 'lightboxVideo', [
				{ key: 'title', value: title },
				{ key: 'controls', value: 'true' },
			]);
			const src = createElementDOM('source', '', '', [
				{ key: 'src', value: file },
				{ key: 'type', value: 'video/mp4' },
			]);
			mp4.appendChild(src);
			mediaDiv.appendChild(mp4);
		}
		const titleImg = createElementDOM('p', `${title}`);

		mediaDiv.appendChild(titleImg);

		return mediaDiv;
	};
	return { getMediaCardDOM, getLightboxCardDOM };
}
