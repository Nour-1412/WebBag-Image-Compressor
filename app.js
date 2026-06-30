// ==========================
// ELEMENTS
// ==========================

const imageInput = document.getElementById("imageInput");

const selectImage = document.getElementById("selectImage");

const dropArea = document.getElementById("dropArea");

const originalPreview = document.getElementById("originalPreview");

const originalSize = document.getElementById("originalSize");

// ==========================
// OPEN FILE PICKER
// ==========================

selectImage.addEventListener("click", () => {

    alert("Button works");

    imageInput.click();

});
