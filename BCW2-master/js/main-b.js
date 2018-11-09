
const showImages = (images) => {
  document.querySelector('ul').innerHTML = images.map((image) => {
    return `<li>
      <figure>
        <a><img src="img/thumbs/${image.mediaThumb}"/></a>
          <figcaption>
            <h3>${image.mediaTitle}</h3>
            <h3>${image.mediaID}</h3>
          </figcaption>
      </figure>
    </li>`;
  })
};
fetch('images.json')
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    showImages(json);
  });

//other way of looping the images
    /*images.forEach((image) =>{
document.querySelector('ul').innerHTML += `<img src="img/thumbs/${image.mediaThumb}"/>`;
  });
  //or
 /* for(let i = 0; i<images.length; i++){
    document.querySelector('ul').innerHTML += `<img src="img/thumbs/${image.mediaThumb}"/>`;
  }
  */
  //or
