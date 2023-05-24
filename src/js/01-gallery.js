// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line


const galleryBox = document.querySelector(".gallery");

galleryBox.insertAdjacentHTML("beforeend",createGalleryItems(galleryItems));

function createGalleryItems(arr) {
    return arr.map(({preview, original,description})=>{

        return `<li class="gallery__item" >
                    <a href="${original}" class="gallery__link">
                        <img 
                        class="gallery__image" 
                        src="${preview}" 
                        data-original="${original}" 
                        title="${description}" 
                        width=300>
                    </a>
                </li>`;} ).join("");
}

const lightbox = new SimpleLightbox('.gallery a',{
    caption:true, 
    captionSelector: 'img',
    captionData: 'Title',
    captionPosition: 'bottom',
    captionDelay: 250,
});

// console.log(galleryItems);
