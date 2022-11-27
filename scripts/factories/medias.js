import createElementDOM from '../utils/genericDom';

export function mediaFactory(data) {
	const { title, image, likes, video, photographerId } = data;
	console.log(video);

	const picture = `assets/medias/${photographerId}/${image}`;
	const file = `assets/medias/${photographerId}/${video}`;

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
		const mediaFile = createElementDOM(video ? 'video' : 'img', '', '', [
			{ key: 'src', value: video ? file : picture },
			{ key: 'type', value: video ? 'video/mp4' : 'img/jpg' },
		]);
		const infoDiv = createElementDOM('div', '', 'bottomCard');
		const titre = createElementDOM('h2', `${title}`);
		const likeSpan = document.createElement('span');
		const like = createElementDOM('p', `${likes}`, 'numberOfLikes');
		const heart = createElementDOM('i', '', 'fas fa-heart');
		mediaDiv.appendChild(mediaFile);
		likeSpan.appendChild(like);
		likeSpan.appendChild(heart);
		infoDiv.appendChild(titre);
		infoDiv.appendChild(likeSpan);
		card.appendChild(mediaDiv);
		card.appendChild(infoDiv);
		ahref.appendChild(card);

		return ahref;
	};
	const getLightboxCardDOM = () => {
		const mediaDiv = createElementDOM('div', '', 'lightbox_medias');
		if (image !== undefined && image !== null) {
			const img = createElementDOM('img', '', 'lightboxImg', [
				{ key: 'src', value: picture },
			]);
			mediaDiv.appendChild(img);
		} else if (video !== undefined && video !== null) {
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