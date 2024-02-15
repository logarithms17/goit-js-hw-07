import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

let galleryContainer = document.querySelector("ul.gallery")

let createGalleryItem = (galleryItems) => {
    return galleryItems.map((galleryItem) => {
        return `<li class="gallery__item">
                <a class="gallery__link" href="${galleryItem.original}">
                    <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"/>
                </a></li>`
    }).join("");
}

let photoGallery = createGalleryItem(galleryItems)
// console.log(photoGallery)
// galleryContainer.innerHTML = photoGallery
// console.log(galleryContainer)
galleryContainer.insertAdjacentHTML("beforeend", photoGallery)
console.log(galleryContainer)

const galleryHandler = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250})
galleryHandler.on("show.simpleLightbox");