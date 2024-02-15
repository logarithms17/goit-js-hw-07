import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

let gallery = document.querySelector(".gallery")
console.log(gallery)

for (let galleryItem of galleryItems) {
    // console.log(galleryItem)
    let li = `
    <li class="gallery__item">
        <a class="gallery__link">
            <img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"/>
        </a>
    </li>`;
    // gallery.appendChild(li)
    // gallery.innerText += li;
    gallery.innerHTML += li;
}

gallery.addEventListener("click", (e) => {
    let originalImage = e.target.getAttribute("data-source")
    console.log(originalImage)
    let instance = basicLightbox.create(`<img src="${originalImage}" width="800" height="600"/>`)
    instance.show();

})