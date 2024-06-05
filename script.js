let Generate = document.getElementById('generate');
const qrText = document.getElementById('input');
const qrCodeImage = document.getElementById('qrCodeImage');

Generate.addEventListener('click', function() {
    generateQRCode()
});

function generateQRCode() {
    qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
}

