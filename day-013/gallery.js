const galleryTiles = document.getElementsByClassName("gallery__tile");
const profiles = document.getElementsByClassName("profile");
const closeButton = document.getElementsByClassName("profile__close");

for (let i = 0; i < galleryTiles.length; i++) {
    galleryTiles[i].onclick = () => {
        profiles[i].classList.add('profile--active');
    }
    closeButton[i].onclick = () => {
        profiles[i].classList.remove('profile--active');
    }
}