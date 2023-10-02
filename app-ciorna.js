let galleryItem = document.querySelectorAll('.gallery-item');
let lightboxImage = document.querySelector('#lightbox');

let galleryContainer = document.getElementById('gallery');
const desenClick = document.getElementById('drawing');
const pirogravajClick = document.getElementById('pyrography');
const sculpturaClick = document.getElementById('woodcarving');
let galleryNav = document.querySelector('.gallery-nav');
let control = 0;

async function showLightBox() {
    const getImage = await fetch('desen.json')
    .then (response => response.json())
    .then(jsonResponse => {
        if (control != 'desen') {
            control = 'desen';
    
            desenClick.style.display = 'none';
            pirogravajClick.style.display = 'block';
            sculpturaClick.style.display = 'block';
            galleryNav.style.width = '30%';
    
            galleryContainer.innerHTML = '';
            jsonResponse.forEach(element => {
                let gridPhoto = `<img src="${element.source}">`;
                let gridTitle = `<p>${element.title}</p>`
                let gridItem = `<div class="gallery-item">${gridPhoto} ${gridTitle}</div>`;
                galleryContainer.innerHTML += gridItem;
                
            });
        }
    })
    return getImage;

    
}
desenClick.addEventListener('click', showLightBox);
galleryItem.forEach(box => box.addEventListener('click', showLightBox));
