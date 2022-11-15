export default function professionalMedia(data) {
	const { title, image, likes, video, photographerId } = data;

	const picture = `assets/medias/${photographerId}/${image}`;
	const file = `assets/medias/${photographerId}/${video}`;

	console.log(photographerId);

	const getUserCardDOM = () =>
		`<div class="photoCard">
      ${
	video
		? `<a href="#" class="photoCardLink">
          <div class="divImgVideo">
              <video src="${file}"></video>
          </div>  
        </a>`
		: `<a href="#">
          <div class="divImgVideo">  
            <img src="${picture}">  
          </div>  
        </a>`
} 

      <div class="bottomCard">
        <h2>${title}</h2>
        <span>
          <span class="number-of-likes">${likes}</span>
          <i class="fas fa-heart"></i>
        </span>
      </div>
    </div>`;
	return { getUserCardDOM };
}
