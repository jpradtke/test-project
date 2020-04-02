// get ISS function
const iss_api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
async function getISS() {
    const response = await fetch(iss_api_url);
    const data = await response.json();
    console.log(data);
    console.log(data.longitude);
    console.log(data.latitude);
    const longitude = data.longitude;
    const latitude = data.latitude;

    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;
    }

console.log("connected!") // show that script is included in HTML


getISS();

setInterval(getISS, 10000);
