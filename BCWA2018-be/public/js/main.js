'use strict';

const frm = document.querySelector('#mediaform');
const img = document.querySelector('#image');
const aud = document.querySelector('#aud');
const vid = document.querySelector('#vid');
console.log("sj");

const sendForm = (evt) => {
  console.log("Moikka");
  evt.preventDefault();
  const fd = new FormData(frm);
  const settings = {
    method: 'post',
    body: fd,
  };

  fetch('/upload', settings)
  .then((response) => {
    console.log(response);
    return response.json();
  }).then((json) => {
    console.log(json[0]);
    const path = json[0].thumbs
    img.src = '../thumbs/'+ path;
});
}
frm.addEventListener('submit', sendForm);
