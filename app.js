// ---- Scroll To Top on Logo click ----

let smeuDragos = document.querySelector('#logo');

const scrollToTop = () => {
    window.scrollTo(0, 0);
}
smeuDragos.addEventListener('click', scrollToTop);


// ---- Gallery Fill ----

let galleryContainer = document.getElementById('gallery');
const desenClick = document.getElementById('drawing');
const pirogravajClick = document.getElementById('pyrography');
const sculpturaClick = document.getElementById('woodcarving');
let galleryNav = document.querySelector('.gallery-nav');
let control = 0;


// Show 'Artwork' Gallery on click

const getGallery = (event) => {fetch(`./data/${event}.json`)
.then (response => response.json())
.then(jsonResponse => {


        galleryContainer.innerHTML = '';
        let gridItemID = 0;
        jsonResponse.forEach(element => {
            let gridPhoto = `<img src="${element.sourceThumb}">`;
            let gridTitle = `<p>${element.title}</p>`
            let gridItem = `<div class="gallery-item" id="${gridItemID}">${gridPhoto} ${gridTitle}</div>`;
            galleryContainer.innerHTML += gridItem;
            console.log(gridItemID)
            gridItemID++
        });

        // -- Modal --

        let lightBoxItem = document.querySelectorAll(".gallery-item");
        let closeButton = document.querySelector("#closeModal");
        let modalContainer = document.querySelector(".modal-container");
        let modal = document.querySelector(".myModal");

        const showLightBox = (event) => {
            let index = event.target.parentElement.id
            modal.innerHTML = ` <h1 class="modal-title">${jsonResponse[index].title}</h1> <img class="modal-img" src="${jsonResponse[index].source}">`
            modalContainer.style.display = "flex";
            console.log("Show!")
            console.log(index)

            let closeButton = document.querySelector("#closeModal");
            let nextButton = document.querySelector("#arrow-right");
            let previousButton = document.querySelector("#arrow-left");
            const nextSlide = () => {
                    
                    if (index >= lightBoxItem.length-1) {
                        index = 0
                    }
                    else {
                        index++
                    }
                    console.log(index)
                    console.log(lightBoxItem.length-1)

                    modal.innerHTML = ` <h1 class="modal-title">${jsonResponse[index].title}</h1> <img class="modal-img" src="${jsonResponse[index].source}">`
                    modalContainer.style.display = "flex";
                }

            const previousSlide = () => {
                    
                    if (index <= 0) {
                        index = lightBoxItem.length-1
                    }
                    else {
                        index--;
                    }
                    console.log(index)

                    modal.innerHTML = ` <h1 class="modal-title">${jsonResponse[index].title}</h1> <img class="modal-img" src="${jsonResponse[index].source}">`
                    modalContainer.style.display = "flex";
                }
                nextButton.addEventListener("click", nextSlide);
                previousButton.addEventListener("click", previousSlide);
        }
        const closeLightBox = () => {
            modal.innerHTML = ``
            modalContainer.style.display = "none";
        }

        lightBoxItem.forEach(() => addEventListener("click", showLightBox))
        closeButton.addEventListener("click", closeLightBox);

    })
};

desenClick.addEventListener('click', () => getGallery("desen"));
pirogravajClick.addEventListener('click', () => getGallery("pirogravaj"));
sculpturaClick.addEventListener('click', () => getGallery("sculptura"));

// -----------------------------

