'use strict';

const update = document.querySelector('#message');
const upload = (evt) => {
  evt.preventDefault();
  update.innerHTML = 'Upload in progress...';
  const input = document.querySelector('input[type="file"]');
  const data = new FormData();
  data.append('fileup', input.files[0]);
  const settings = {
    method: 'POST',
    credentials: 'same-origin',
    body: data
  };
  fetch('http://10.114.34.133:8080/Task4/', settings).then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
    update.innerHTML = 'upload complete';
    document.querySelector('img').src = json.src;
  });
};
document.querySelector('form').addEventListener('submit', upload);
