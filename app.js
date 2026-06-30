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
const canvas = document.createElement("canvas");

const ctx = canvas.getContext("2d");

const img = new Image();

img.onload = () => {

    canvas.width = img.width;

    canvas.height = img.height;

    ctx.drawImage(img, 0, 0);

    const compressedData = canvas.toDataURL("image/jpeg", 0.7);

    compressedPreview.src = compressedData;

};

img.src = URL.createObjectURL(file);
});
const compressedPreview = document.getElementById("compressedPreview");

const compressedSize = document.getElementById("compressedSize");

const savedPercent = document.getElementById("savedPercent");

const downloadBtn = document.getElementById("downloadBtn");
