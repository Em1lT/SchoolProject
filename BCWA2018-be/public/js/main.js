'use strict';

const frm = document.querySelector('#mediaform');
const list = document.querySelector('#imagelist');
const deletesql = document.querySelector('#but');
const upfor = document.querySelector('#updateform');
/*
const img = document.querySelector('#image');
const aud = document.querySelector('#aud');
const vid = document.querySelector('#vid');
*/
/*
upfor.addEventListener('submit', (e) => {
  fetch('/update', {method: 'POST'})
  .then((response) => {
    if(response.ok){
      console.log('uptaded done');
      return;
    }
    throw new Error('Request failed.');
    }).catch(function(error){
      console.log(error);
    });
  });
*/
const doSmt = document.querySelector("#som");
doSmt.addEventListener('click', (e) => {
  console.log("loltrol");
  fetch('/something', {method: 'POST'})
  .then((response) =>{
  if(response.ok){
    console.log('doing');
    return;
  }
  throw new Error('Request failed.');
  }).catch(function(error){
    console.log("error" + error);
  });
  
});
deletesql.addEventListener ('click', (e) =>{
console.log("button clicked");
fetch('/clicked', {method: 'POST'})
.then((response) =>{
if(response.ok){
  console.log('remove a picture');
  return;
}
throw new Error('Request failed.');
}).catch(function(error){
  console.log("error" + error);
});

});
const fillUpdate = (image) => {
  console.log(image);
  document.querySelector('#updateform input[name=id]').value = image.id;
  document.querySelector('#deleteform input').value = image.id;
  document.querySelector('#updateform input[name=title]').value = image.title;
  document.querySelector('#updateform button').removeAttribute('disabled');
  document.querySelector('#but').removeAttribute('disabled');
};
const getImages = () => {
  fetch('/images').then((response) => {
    return response.json();
  }).then((json) => {
    // clear list before adding upated data
    list.innerHTML = '';
    json.forEach((image) => {
      const li = document.createElement('li');
      const title = document.createElement('h3');
      const details = document.createElement('p');
      details.innerHTML = image.details;
      title.innerHTML = image.title;
      li.appendChild(title);
      const img = document.createElement('img');
      img.src = 'thumbs/' + image.thumbnail;
      img.addEventListener('click', () => {
        fillUpdate(image);
      });
      li.appendChild(details);
      li.appendChild(img);
      list.appendChild(li);
    });
  });
};

const sendForm = (evt) => {
  console.log("send form");
  evt.preventDefault();
  const fd = new FormData(frm);
  const settings = {
    method: 'post',
    body: fd,
  };

  fetch('/upload', settings).then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
    getImages();
  });
};


frm.addEventListener('submit', sendForm);
getImages();

/*
 list.innerHTML += `<div class="flip-box">
      <div class="flip-box-inner">
        <div class="flip-box-front">
          <h2><img src="thumbs/${image.thumbnail}"></h2>
        </div>
        <div class="flip-box-back">
        </form>
        <h1>Update Image</h1>
        <form action="/images" id="updateform">
            <input type="text" name="category" placeholder="Category">
            <br>
            <input type="text" name="title" placeholder="Title">
            <br>
            <input type="text" name="details" placeholder="Details">
            <br>
            <input type="hidden" name="mID">
            <button type="submit" disabled>Submit</button>
        </form>
        </div>
      </div>
    </div>`;

*/
