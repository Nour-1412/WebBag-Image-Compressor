const imageInput = document.getElementById("imageInput");
const selectImage = document.getElementById("selectImage");

const originalPreview = document.getElementById("originalPreview");
const originalSize = document.getElementById("originalSize");

// فتح نافذة اختيار الصورة
selectImage.addEventListener("click", () => {
    imageInput.click();
});

// عند اختيار صورة
imageInput.addEventListener("change", () => {

    const file = imageInput.files[0];

    if (!file) return;

    originalPreview.src = URL.createObjectURL(file);

    originalSize.textContent =
        "Size: " + (file.size / 1024).toFixed(1) + " KB";

});
