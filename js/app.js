
let galleryContainer = document.getElementById('gallery-container');
const desenClick = document.getElementById('desen');
const pirogravajClick = document.getElementById('pirogravaj');
let control = '';

// Show 'Desene' Gallery on click

const getImage = () => {fetch('js/desen.json')
.then (response => response.json())
.then(jsonResponse => {
    if (control != 'desen') {
        control = 'desen';
        galleryContainer.innerHTML = '';
        jsonResponse.forEach(element => {
            let gridPhoto = `<img src="${element.source}">`;
            let gridTitle = `<p>${element.title}</p>`
            let gridItem = `<div class="gallery-item">${gridPhoto} ${gridTitle}</div>`;
            galleryContainer.innerHTML += gridItem;
            desenClick.classList.add('active');
            pirogravajClick.classList.remove('active');
        });
    }
})};

// Show 'Pirogravaje' Gallery on click

const getPyrography = () => {fetch('js/pirogravaj.json')
.then (response => response.json())
.then(jsonResponse => {
    if (control != 'pirogravaj') {
        control = 'pirogravaj';
        galleryContainer.innerHTML = '';
        jsonResponse.forEach(element => {
            let gridPhoto = `<img src="${element.source}">`;
            let gridTitle = `<p>${element.title}</p>`
            let gridItem = `<div class="gallery-item">${gridPhoto} ${gridTitle}</div>`;
            galleryContainer.innerHTML += gridItem;
            pirogravajClick.classList.add('active');
            desenClick.classList.remove('active');
        });
    }
})};


desenClick.addEventListener('click', getImage);
pirogravajClick.addEventListener('click', getPyrography);

