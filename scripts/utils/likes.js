export const handleNumberOfLikes = (medias) => {
	const likeHeartSpan = document.querySelectorAll('.likeSpan');
	const totalOfLikesDiv = document.querySelector('.totalNumberOfLikes');
	let totalOfLikes = 0;

	medias.forEach((media) => {
		totalOfLikes += media.likes;
		totalOfLikesDiv.innerText = totalOfLikes;
	});
	likeHeartSpan.forEach((e) => {
		e.addEventListener('click', () => {
			const likesAmount = e.children[0];
			const heart = e.children[1];
			const styleHeart = e.children[2];
			if (likesAmount.classList.contains('liked')) {
				likesAmount.innerText--;
				likesAmount.classList.remove('liked');
				styleHeart.classList.remove('active');
				heart.classList.remove('active');
				totalOfLikesDiv.innerText--;
			} else {
				likesAmount.innerText++;
				likesAmount.classList.add('liked');
				styleHeart.classList.add('active');
				heart.classList.add('active');
				totalOfLikesDiv.innerText++;
			}
		});
	});
};
export default handleNumberOfLikes;
