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
currentFile = file;
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

  const compressedData = canvas.toDataURL(
    "image/jpeg",
    qualityRange.value / 100
);  

    compressedPreview.src = compressedData;
    
const compressedBlob = dataURLToBlob(compressedData);

const newSize = compressedBlob.size;

compressedSize.textContent =
    "Size: " + (newSize / 1024).toFixed(1) + " KB";

const percent =
    ((file.size - newSize) / file.size) * 100;

savedPercent.textContent =
    "Saved: " + percent.toFixed(1) + "%";

downloadBtn.style.display = "inline-flex";

downloadBtn.onclick = () => {

    const link = document.createElement("a");

    link.href = compressedData;

    link.download = "compressed-image.jpg";

    link.click();

};
};

img.src = URL.createObjectURL(file);
});
const compressedPreview = document.getElementById("compressedPreview");

const compressedSize = document.getElementById("compressedSize");

const savedPercent = document.getElementById("savedPercent");

const downloadBtn = document.getElementById("downloadBtn");
const qualityRange = document.getElementById("qualityRange");
const qualityValue = document.getElementById("qualityValue");
let currentFile = null;
function dataURLToBlob(dataURL) {
qualityRange.addEventListener("input", () => {

    qualityValue.textContent = qualityRange.value + "%";

    if (!currentFile) return;

    imageInput.dispatchEvent(new Event("change"));

});
    const arr = dataURL.split(",");

    const mime = arr[0].match(/:(.*?);/)[1];

    const bstr = atob(arr[1]);

    let n = bstr.length;

    const u8arr = new Uint8Array(n);

    while (n--) {

        u8arr[n] = bstr.charCodeAt(n);

    }

    return new Blob([u8arr], { type: mime });

}
