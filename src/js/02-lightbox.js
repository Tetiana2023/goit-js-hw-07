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

//galleryEl.addEventListener('click', onGalleryElClick)
 
//function onGalleryElClick(event){
    //event.preventDefault();

   // if (event.target.nodeName !== "IMG"){
    // return;
   //}
        // if (!event.target.classList.contains("gallery__image"))
       // {return}
   // const instance = basicLightbox.create(`
    //<img  src="${event.target.dataset.source}"  width="800" height="600">
//`)
    
//instance.show()
//}
const gallery = new SimpleLightbox('.gallery a', 
{ captions: true,
    captionsData: "alt",
    captionDelay: 250,});
