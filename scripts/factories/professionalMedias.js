/* eslint-disable import/prefer-default-export */
export default function professionalMedia (data) {
  const { title, image, likes, video, photographerId} = data;
  
  const picture = `../assets/medias/${photographerId}/${image}`;
  const videos = `../assets/medias/${photographerId}/${video} `; 
  console.log(photographerId)

  const getUserCardDOM = () => {
    const parent = document.createElement("div");
    const divImgVideo = document.createElement("div"); 
    const img = document.createElement("img");
    const video = document.createElement("video");
    const divTitleLikes = document.createElement("div");
    const h2 = document.createElement("h2");
    const like = document.createElement("span");
    const likesFont = document.createElement("i");
    
    img.setAttribute("src", picture);
    video.setAttribute("src", videos)
    h2.textContent = title;
    like.innerText = likes;
    likesFont.className = "fas fa-heart";
    divImgVideo.appendChild(img);
    divImgVideo.appendChild(video);
    divTitleLikes.appendChild(h2);
    parent.appendChild(divImgVideo);
    parent.appendChild(divTitleLikes);
    return parent;
  }
  
  return { getUserCardDOM };
}



