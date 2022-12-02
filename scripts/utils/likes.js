export const numberOfLikes = (medias) => {
	const likeHeart = document.querySelectorAll('.heartInCard');
	const totalOfLikesDiv = document.querySelector('.totalNumberOfLikes');
	let totalOfLikes = 0;

	medias.forEach((media) => {
		totalOfLikes += media.likes;
		totalOfLikesDiv.innerText = totalOfLikes;
	});
	likeHeart.forEach((e) => {
		e.addEventListener('click', () => {
			const likesAmount = e.parentElement.children[0];
			if (likesAmount.classList.contains('liked')) {
				likesAmount.innerText--;
				likesAmount.classList.remove('liked');
				totalOfLikesDiv.innerText--;
			} else {
				likesAmount.innerText++;
				likesAmount.classList.add('liked');
				totalOfLikesDiv.innerText++;
			}
		});
	});

	/*
    likeHeart.forEach((e) => {
		e.addEventListener('click', () => {
			likesAmount.forEach((el) => {
				if (el.classList.contains('liked')) {
					el.innerText--;
					el.classList.remove('liked');
					totalOfLikesDiv.innerText--;
				} else {
					el.innerText++;
					el.classList.add('liked');
					totalOfLikesDiv.innerText++;
				}
			});
		});
	});
    */
};
export default numberOfLikes;
