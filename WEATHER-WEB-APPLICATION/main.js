var locationValue;
var data;
const apikey = "64588c8f95927b8f1bd4950c3abed954";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function render() {
  locationValue = document.getElementById("location").value;
  console.log(locationValue);

  const response = await fetch(apiurl + locationValue + "&appid=" + apikey);
  data = await response.json();
  neww(data);
  console.log(apiurl + locationValue + "&appid=" + apikey);
}

function neww(data) {
  console.log(data);

  if (data.cod == "404") {
    const container = document.querySelector(".container");
    const temperature = document.querySelector(".hum01");
    const description = document.querySelector(".temp01");
    const water = document.querySelector("#water");
    const solid = document.querySelector("#solid");
    var image = document.getElementById("image1");
    image.src = "../WEATHER-WEB-APPLICATION/img/notfound.jpg";
    const change = document.querySelector(".loc");
    change.textContent = "Oops! Invalid location :/";
    console.log("Oops! Invalid location :/");
    description.style.display = "none";
    temperature.style.display = "none";
    water.style.display = "none";
    solid.style.display = "none";
    container.style.height ="450px";
  } else if (data.cod == "200") {
    const temperature = document.querySelector(".hum01");
    const description = document.querySelector(".temp01");
    const solid = document.querySelector("#solid");
    const container = document.querySelector(".container");
    const water = document.querySelector("#water");
    description.style.display = "block";
    temperature.style.display = "block";
    water.style.display = "block";
    solid.style.display = "block";
    container.style.height = "600px";

    console.log("Sucess ");
    document.getElementById("hum").innerHTML = data.main.humidity;
    document.getElementById("temp").innerHTML = data.main.temp;
    const change = document.querySelector(".loc");
    var image = document.getElementById("image1");
    change.innerHTML = `${data.name} " ${data.weather[0].main}"`;

    if (data.weather[0].main == "Clouds") {
      image.src = "../WEATHER-WEB-APPLICATION/img/Clooudy.jpg";
    } else if (data.weather[0].main == "Rain") {
      image.src = "../WEATHER-WEB-APPLICATION/img/Rainy.jpg";
    } else if (data.weather[0].main == "Clear") {
      image.src = "../WEATHER-WEB-APPLICATION/img/Clear.jpg";
    }
  }
}
