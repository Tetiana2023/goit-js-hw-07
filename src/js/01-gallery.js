import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");


const galleryNewEl = galleryItems.map(item => {
    return ` <a class= "gallery__link" href= "${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`
})
.join("");

galleryEl.insertAdjacentHTML('afterbegin', galleryNewEl);
console.log(galleryEl);


