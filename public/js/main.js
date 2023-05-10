const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;

  if (cityVal == "") {
    city_name.innerText = "Please write the name before search";
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=6abb1b3b4cdbcd60a263b7073f7f0251&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      //   console.log(arrData);

      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp.innerText = arrData[0].main.temp;
      //   temp_status.innerText = arrData[0].weather[0].main;

      const tempStatus = arrData[0].weather[0].main;

      if (tempStatus == "Clear") {
        temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color: #eccc68'></i>";
      } else if (tempStatus == "Clouds") {
        temp_status.innerHTML = "<i class='fa-solid fa-cloud' style='color: #f1f2f6'></i>";
      } else if (tempStatus == "Rain") {
        temp_status.innerHTML = "<i class='fa-solid fa-cloud-rain' style='color: #a4b0be'></i>";
      } else {
        temp_status.innerHTML = "<i class='fa-solid fa-cloud' style='color: #44c3de'></i>";
      }
    } catch (error) {
      city_name.innerText = "Please enter the city name properly";
    }
  }
};

submitBtn.addEventListener("click", getInfo);
