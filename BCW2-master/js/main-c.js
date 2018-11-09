
const showImages= (images)=>    {

    
  
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const figcaption = document.createElement('figcaption');
    const figure = document.createElement('figure');
    const a = document.createElement('a');
    const img = document.createElement('img');

    h3.innerText = image.mediaTitle;
    figcaption.appendChild(h3);
    a.setAttribute('href', `ìmg/original/${image.mediaThumb}`);
    img.setAttribute('src',`ìmg/thumbs/${image.mediaThumb}`);
    a.appendChild(img);
    figure.appendChild(a);
    figure.appendChild(figcaption);
    li.appendChild(figure);
    document.querySelector('ul').appendChild(li);


}
showImages();