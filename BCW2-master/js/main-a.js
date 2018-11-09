// Create function 'showImages' which
// adds the loaded HTML content to <ul> element

function showImages(){
  const images = document.querySelector('ul');
  fetch('images.html')
  .then(response => {
    return response.text()
  })
  .then(data => {
    
    images.innerHTML = data;
  })
}

showImages();