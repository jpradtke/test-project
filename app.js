console.log("app.js is connected & live update is connected");
console.log('About to fetch a rainbow!');
    fetch('rainbow.jpeg')
    .then(response=> {
        console.log(response);
        return response.blob();
    })
    .then(blob => {
        console.log(blob);
        document.getElementById('rainbow').src = URL.createObjectURL(blob);
    })
    .catch(error => {
        console.log('error');
        console.error(error);
    });