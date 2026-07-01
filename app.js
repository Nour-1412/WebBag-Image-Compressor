const imageInput = document.getElementById("imageInput");
const selectImage = document.getElementById("selectImage");

const originalPreview = document.getElementById("originalPreview");
const originalSize = document.getElementById("originalSize");
const originalResolution = document.getElementById("originalResolution");
const originalFormat = document.getElementById("originalFormat");
const formatSelect = document.getElementById("formatSelect");
const resizeWidth = document.getElementById("resizeWidth");
const resizeHeight = document.getElementById("resizeHeight");
// فتح نافذة اختيار الصورة
selectImage.addEventListener("click", () => {
    imageInput.click();
});

// عند اختيار صورة
imageInput.addEventListener("change", () => {
loadingText.style.display = "block";
downloadBtn.style.display = "none";
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
originalResolution.textContent =
    "Resolution: " + img.width + " × " + img.height;

compressedResolution.textContent =
    "Resolution: " + canvas.width + " × " + canvas.height;

originalFormat.textContent =
    "Format: " + file.type.replace("image/", "").toUpperCase();

const selectedFormat = formatSelect.value;
    if (!resizeWidth.value) {

    resizeWidth.value = img.width;

}

if (!resizeHeight.value) {

    resizeHeight.value = img.height;

}

compressedFormat.textContent =
    "Format: " + selectedFormat.replace("image/", "").toUpperCase();
    canvas.width = resizeWidth.value
    ? Number(resizeWidth.value)
    : img.width;

canvas.height = resizeHeight.value
    ? Number(resizeHeight.value)
    : img.height;


    ctx.drawImage(
    img,
    0,
    0,
    canvas.width,
    canvas.height
);

  const compressedData = canvas.toDataURL(
    selectedFormat,
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
    loadingText.style.display = "none";

img.src = URL.createObjectURL(file);
});
const compressedPreview = document.getElementById("compressedPreview");

const compressedSize = document.getElementById("compressedSize");
const compressedResolution = document.getElementById("compressedResolution");
const compressedFormat = document.getElementById("compressedFormat");
const savedPercent = document.getElementById("savedPercent");

const downloadBtn = document.getElementById("downloadBtn");
const loadingText = document.getElementById("loadingText");
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

// ==========================
// DRAG & DROP
// ==========================

dropArea.addEventListener("dragover", (e) => {

    e.preventDefault();

    dropArea.classList.add("dragging");

});

dropArea.addEventListener("dragleave", () => {

    dropArea.classList.remove("dragging");

});

dropArea.addEventListener("drop", (e) => {

    e.preventDefault();

    dropArea.classList.remove("dragging");

    imageInput.files = e.dataTransfer.files;

    imageInput.dispatchEvent(new Event("change"));

});
