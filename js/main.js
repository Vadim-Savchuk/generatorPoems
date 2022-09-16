

let poem = document.querySelectorAll('.poem');
let poemRandom = Math.floor(Math.random() * poem.length);
let resalt = poem[poemRandom];

resalt.classList.add('show');





