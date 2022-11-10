/* eslint-disable import/prefer-default-export */
export default function professionalMedia (data) {
  const { title, image, likes, video, photographerId} = data;
  
  const picture = `assets/medias/${photographerId}/${image}`;
 
  console.log(photographerId)

  const getUserCardDOM = () => {
    const parent = document.createElement("div");
    parent.className = "photoCard";
    const divImgVideo = document.createElement("div"); 
    const img = document.createElement("img");
    const divLikes = document.createElement("span");
    const divTitleLikes = document.createElement("div");
    divTitleLikes.className = "bottomCard";
    const h2 = document.createElement("h2");
    const like = document.createElement("span");
    const likesFont = document.createElement("i");
    
    img.setAttribute("src", picture);
    
    h2.textContent = title;
    like.innerText = likes;
    like.className = "number-of-likes";
    likesFont.className = "fas fa-heart";
    divImgVideo.appendChild(img);
    divLikes.appendChild(like);
    divLikes.appendChild(likesFont);
    divTitleLikes.appendChild(h2);
    divTitleLikes.appendChild(divLikes);
    
    parent.appendChild(divImgVideo);
    parent.appendChild(divTitleLikes);
    return parent;
  }
  
  return { getUserCardDOM };
}



