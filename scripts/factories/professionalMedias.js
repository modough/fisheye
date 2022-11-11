/* eslint-disable import/prefer-default-export */
export default function professionalMedia (data) {
  const { title, image, likes, video, photographerId} = data;
  
  const picture = `assets/medias/${photographerId}/${image}`; 
  const file = `assets/medias/${photographerId}/${video}`;
 
  console.log(photographerId)

  const getUserCardDOM = () => 
    `<div class="photoCard">
        <div class="divImgVideo">
          ${video ? 
            `<video src="${file}"></video><i class="far fa-play-circle"></i>` 
          :
            `<img src="${picture}">`}
        </div>

        <div class="bottomCard">
          <h2>${title}</h2>
          <span>
            <span class="number-of-likes">${likes}</span>
            <span><i class="fas fa-heart"></i></span>
          </span>
        </div>
    </div>`;
  return { getUserCardDOM };
}



