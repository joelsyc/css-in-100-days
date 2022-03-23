const button = document.querySelector(".button");
const dropzone = document.querySelector(".dropzone");
const upload = document.querySelector(".upload_icon");
const syncing = document.getElementsByClassName('syncing')[0];
const loading = document.getElementsByClassName('loading')[0];
let fileName = '';
let uploading = false;
let droppedFiles = [];

dropzone.addEventListener('dragenter', (event) => {
    event.stopPropagation();
    event.preventDefault();
}, false);

dropzone.addEventListener('dragleave', (event) => {
    event.stopPropagation();
    event.preventDefault();
}, false);

dropzone.addEventListener('dragover', (event) => {
    event.stopPropagation();
    event.preventDefault();
}, false);

dropzone.addEventListener('drop', (event) => {
    event.stopPropagation();
    event.preventDefault();
    droppedFiles = event.dataTransfer.files;
    fileName = droppedFiles[0].name;
}, false);

button.onclick = () => {
    if (!uploading && fileName != '') {
        uploading = true;
        button.textContent = "Uploading...";
        dropzone.style.opacity = "0%";

    }
}