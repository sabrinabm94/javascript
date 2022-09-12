let todayChecked = false;
let fiveDaysChecked = false;
let concatVariables = "";
let id = "";
let concatId = "";
let city = "";
const key = "70048041a843054b2b98174e3afae944";
const oldKey = "d8bd2c52b9e7501d9e189357b664b513";
let error = "";
let settings = {
  async: true,
  crossDomain: true,
  method: "GET",
};

$("#submit").click(function () {
  checkOptionEmpty();

  if (formEmpty !== true) {
    city = $("#city").val();

    if (city && key) {
      concatVariables = city + "&appid=" + key;

      if (settings) {
        settings.data = {
          q: city,
          appid: key,
        };
      }
    }

    //five days
    if ($("#5Days").is(":checked")) {
      if (city, key) {
        try {
          settings.url = "http://api.openweathermap.org/geo/1.0/direct";
          settings.data = {
            q: city,
            appid: key,
			limit: 1
          };

          $.ajax(settings).done(function (data) {
			let result = data[0];
            if (data && key) {
              try {
                setValue("#results", "");
                settings.url = "http://api.openweathermap.org/data/2.5/forecast/daily";
                settings.data = {
                  lat: result.lat,
                  lon: result.lon,
                  appid: key,
                  cnt: 5,
                };

                $.ajax(settings).done(function (data) {
                  alert("Sucess request weather for fiveDays!");
                  resultsDays(data);
                  city = setEmpty(city);
                  key = setEmpty(key);
                });
              } catch (error) {
                showError(error);
                setValue("#results", "");
              }
            }
          });
        } catch (error) {
          showError(error);
          setValue("#results", "");
        }
      }
    } else {
      //one day
      try {
        if (city && key) {
          setValue("#results", "");
          settings.url = "https://api.openweathermap.org/data/2.5/weather";

          $.ajax(settings).done(function (data) {
            alert("Sucess request weather for today!");
            let day = "now";
            results(day, data);
            city = setEmpty(city);
            key = setEmpty(key);
          });
        }
      } catch (error) {
        showError(error);
        setValue("#results", "");
      }
    }
  }
});
function showError(error) {
  $("#error").html("Bad request: " + error);
  alert(error);
}
function setEmpty(toClean) {
  if (toClean) {
    return (toClean = "");
  }
}
function checkOptionEmpty() {
  if (
    ($("#city").val() == "" && $("#key").val() == "") ||
    $("#city").val() == "" ||
    $("#key").val() == ""
  ) {
    formEmpty = true;
  } else {
    formEmpty = false;
  }

  if (formEmpty == true) {
    setValue("#results", "");
    $("#error").html("Please, fill all the fields to proceed");
  } else {
    $("#error").html("");
  }
}
function results(day, data) {
  id = data.id;
  let country = data.sys.country;
  let cityName = data.name;
  let lat = data.coord.lat;
  let lon = data.coord.lon;
  let weather = data.weather[0].main;
  let weatherDesc = data.weather[0].description;
  let tempMin = data.main.temp_min;
  let tempMax = data.main.temp_max;
  let windSpeed = data.wind.speed;
  let humidity = data.main.humidity;
  let tempMinC = (tempMin - 273.15) / 1.8;
  let tempMaxC = (tempMax - 273.15) / 1.8;
  let dataShow =
    "<p>Weather " +
    day +
    " in " +
    cityName +
    " - " +
    country +
    "</p>" +
    "<p>Latitude: " +
    lat +
    "</p>" +
    "<p>Longitude: " +
    lon +
    "</p>" +
    "<p>Weather: " +
    weather +
    "</p>" +
    "<p>Description: " +
    weatherDesc +
    "</p>" +
    "<p>Temp Min: " +
    tempMinC +
    " Celsius" +
    "</p>" +
    "<p>Temp Max: " +
    tempMaxC +
    " Celsius" +
    "</p>" +
    "<p>Wind speed: " +
    windSpeed +
    " Km/h" +
    "</p>" +
    "<p>Humidity: " +
    humidity +
    " %" +
    "</p>";

  $("#results").html(dataShow);
  $("html,body").animate(
    { scrollTop: $("#results").offset().top - 100 },
    "slow"
  );
  $("#error").html("");
  clearVariables();
}

function resultsDays(data) {
  if (data) {
    let list = data.list;

    for (let i = 0; i <= 7; i++) {
      //let info = data.list[i].dt;
      let country = data.city.country;
      let cityName = data.city.name;
      let lat = data.city.coord.lat;
      let lon = data.city.coord.lon;
      let weather = data.list[i].weather[0].main;
      let weatherDesc = data.list[i].weather[0].description;
      let weatherIcon = data.list[i].weather[0].icon;
      let tempMin = data.list[i].temp.min;
      let tempMax = data.list[i].temp.max;
      let windSpeed = data.list[i].speed;
      let humidity = data.list[i].humidity;
      let tempMinC = (tempMin - 273.15) / 1.8;
      let tempMaxC = (tempMax - 273.15) / 1.8;
      let dataShow =
        "<div class='results" +
        "'" +
        "<h3>" +
        i +
        "</h3>" +
        "<p>Weather for " +
        " in " +
        cityName +
        " - " +
        country +
        "</p>" +
        "<p>Latitude: " +
        lat +
        "</p>" +
        "<p>Longitude: " +
        lon +
        "</p>" +
        "<p>Weather: " +
        weather +
        "</p>" +
        "<p>Description: " +
        weatherDesc +
        "</p>" +
        "<img src='http://openweathermap.org/img/w/" +
        weatherIcon +
        ".png'" +
        "alt=''>" +
        "<p>Temp Min: " +
        tempMinC +
        " Celsius" +
        "</p>" +
        "<p>Temp Max: " +
        tempMaxC +
        " Celsius" +
        "</p>" +
        "<p>Wind speed: " +
        windSpeed +
        " Km/h" +
        "</p>" +
        "<p>Humidity: " +
        humidity +
        " %" +
        "</p>" +
        "</div>";

      $("#show").append(dataShow);
      clearVariables();
    }
  }
}
function clearVariables() {
  country = "";
  cityName = "";
  lat = "";
  lon = "";
  weather = "";
  weatherDesc = "";
  weatherIcon = "";
  tempMin = "";
  tempMax = "";
  windSpeed = "";
  humidity = "";
}
function setValue(className, value) {
  $(className).html(value);
}
