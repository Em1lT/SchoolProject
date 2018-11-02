const firstElement = document.querySelector('#test');
firstElement.innerHTML = 'I add <strong>this</strong> text with JS';
firstElement.setAttribute('style', 'color:red');
const exampleELements = document.querySelectorAll('.example');
console.log(exampleELements);

for(let i = 0; i< exampleELements.length; i++){
console.log(exampleELements[i]);
exampleELements[i].setAttribute('style','color:green');
}

exampleELements.forEach( element => {
    element.addEventListener("click", (evt) =>{
        console.log(evt.currentTarget);
        });
})
const changeColor = firstElement.addEventListener("click", (evt) =>{
console.log(evt.currentTarget);
evt.currentTarget.setAttribute('style', 'background: yellow');
});