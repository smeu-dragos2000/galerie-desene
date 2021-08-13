// ---- Scroll To Top on Logo click ----

let smeuDragos = document.querySelector('#logo');

const scrollToTop = () => {
    window.scrollTo(0, 0);
}
smeuDragos.addEventListener('click', scrollToTop);


// ---- LightBox ----

let galleryItem = document.querySelectorAll('.gallery-item');
let lightboxImage = document.querySelector('#lightbox');

const showLightBox = () => { 
        console.log('test')
}

galleryItem.forEach(box => box.addEventListener('click', showLightBox));


// ---- Gallery Fill ----

let galleryContainer = document.getElementById('gallery');
const desenClick = document.getElementById('drawing');
const pirogravajClick = document.getElementById('pyrography');
const sculpturaClick = document.getElementById('woodcarving');
let galleryNav = document.querySelector('.gallery-nav');
let control = 0;

// Show 'Drawing' Gallery on click

const getImage = () => {fetch('desen.json')
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
};

// Show 'Pyrography' Gallery on click

const getPyrography = () => {fetch('pirogravaj.json')
.then (response => response.json())
.then(jsonResponse => {
    if (control != 'pirogravaj') {
        control = 'pirogravaj';

        pirogravajClick.style.display = 'none';
        desenClick.style.display = 'block';
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
};

// Show 'Woodcarving' Gallery on click ---work in progress

const getWoodcarving = () => {fetch('sculptura.json')
.then (response => response.json())
.then (jsonResponse => {
    if (control != 'sculptura') {
        control = 'sculptura';

        sculpturaClick.style.display = 'none';
        pirogravajClick.style.display = 'block';
        desenClick.style.display = 'block';
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
};

desenClick.addEventListener('click', getImage);
pirogravajClick.addEventListener('click', getPyrography);
sculpturaClick.addEventListener('click', getWoodcarving);



