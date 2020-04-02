console.log("app.js is connected & live update is connected");
console.log('About to fetch a rainbow!');


catchRainbow()
.then(response => {
    console.log("it worked!")
})

.catch(error => {
    console.log('error');
    console.error(error);
});

async function catchRainbow() {
    const response = await fetch('rainbow.jpeg');
    const blob = await response.blob();
    document.getElementById('rainbow').src = URL.createObjectURL(blob);
}
    