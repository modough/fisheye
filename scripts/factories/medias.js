import createElementDOM from '../utils/genericDom';

export const mediaFactory = (data) => {
	const { title, image, likes, video, photographerId } = data;

	const picture = `assets/medias/${photographerId}/${image}`;
	const file = `assets/medias/${photographerId}/${video}`;

	// Dom elements such as images and videos on photographer's page
	const getMediaCardDOM = () => {
		const card = createElementDOM('div', '', 'photoCard');
		const mediaDiv = createElementDOM(
			'div',
			'',
			video ? 'divImgVideo photoCardLink' : 'divImgVideo',
			[{ key: 'tabindex', value: '0' }]
		);
		const playIcon = createElementDOM('i', '', 'fas fa-play');
		video
			? (playIcon.style.display = 'block')
			: (playIcon.style.display = 'none');
		const mediaFile = createElementDOM(video ? 'video' : 'img', '', '', [
			{ key: 'src', value: video ? file : picture },
			{ key: 'type', value: video ? 'video/mp4' : 'img/jpg' },
			{ key: 'aria-label', value: `${title} dans la lightbox` },
			{ key: 'role', value: video ? 'video' : 'img' },
		]);
		const infoDiv = createElementDOM('div', '', 'bottomCard');
		const titre = createElementDOM('h2', `${title}`);
		const likeSpan = createElementDOM('span', '', 'likeSpan', [
			{ key: 'tabindex', value: '0' },
			{ key: 'aria-label', value: `${likes} nombre de likes` },
		]);
		const like = createElementDOM('p', `${likes}`, 'numberOfLikes', [
			{ key: 'aria-label', value: `${likes} nombre de likes` },
		]);
		const heart = createElementDOM('i', '', 'fas fa-heart heartInCard');
		const emptyHeart = createElementDOM('i', '', 'fas fa-heart emptyHeart');
		mediaDiv.appendChild(playIcon);
		mediaDiv.appendChild(mediaFile);
		likeSpan.appendChild(like);
		likeSpan.appendChild(heart);
		likeSpan.appendChild(emptyHeart);
		infoDiv.appendChild(titre);
		infoDiv.appendChild(likeSpan);

		card.appendChild(mediaDiv);
		card.appendChild(infoDiv);

		return card;
	};

	// Dom elements such as images and videos on lightbox
	const getLightboxCardDOM = () => {
		const mediaDiv = createElementDOM('li', '', 'lightbox_medias');
		if (image) {
			const img = createElementDOM('img', '', 'lightboxImg', [
				{ key: 'src', value: picture },
				{ key: 'alt', value: `${title} dans la lightbox` },
				{ key: 'role', value: 'img' },
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
				{ key: 'role', value: 'video' },
			]);
			mp4.appendChild(src);
			mediaDiv.appendChild(mp4);
		}
		const titleImg = createElementDOM('h2', `${title}`);

		mediaDiv.appendChild(titleImg);

		return mediaDiv;
	};
	return { getMediaCardDOM, getLightboxCardDOM };
};
export default mediaFactory;
