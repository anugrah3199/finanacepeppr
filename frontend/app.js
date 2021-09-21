const firebaseConfig = {
    apiKey: "AIzaSyAWAA7yF6dB5xX7bp9qqchvMwgEph_rfI0",
    authDomain: "finanacepeppr.firebaseapp.com",
    projectId: "finanacepeppr",
    storageBucket: "finanacepeppr.appspot.com",
    messagingSenderId: "608196697718",
    appId: "1:608196697718:web:c61a20178d9c431a508957",
    measurementId: "G-PV3C2BC66T"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function login() {
    e.preventDefault();

}
const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList);
});

function readImage(file) {
    // Check if the file is an image.
    if (file.type && !file.type.startsWith('image/')) {
        console.log('File is not an image.', file.type, file);
        return;
    }

    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        img.src = event.target.result;
    });
    reader.readAsDataURL(file);
}