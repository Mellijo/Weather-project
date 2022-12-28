let currentTime = new Date();

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednasday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[date.getDay()];
  let currentHour = date.getHours();
  let currentMinute = ("00" + date.getMinutes()).slice(-2);

  let formattedDate = `Today is ${currentDay} ${currentHour}:${currentMinute}`;
  return formattedDate;
}

formatDate(currentTime);

let todaysDate = document.querySelector("h2");
todaysDate.innerHTML = formatDate(currentTime);

function showCity(event) {
  event.preventDefault();

  let h1 = document.querySelector("#h1city");
  let city = document.querySelector("#city-field").value;
  console.log(city);
  h1.innerHTML = city;
  let apiKey = "0f8bc384a7c31b717a18cfe38a95ae06";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let inputForm = document.querySelector("#search-form");
inputForm.addEventListener("submit", showCity);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let tempBox = document.querySelector("#temp1");
  tempBox.innerHTML = temperature;
  console.log(response);
  let description = response.data.weather[0].description;
  let descriptionBox = document.querySelector("#description1");
  descriptionBox.innerHTML = description;
}
