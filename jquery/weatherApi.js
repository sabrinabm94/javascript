var todayChecked = false;
var fiveDaysChecked =  false;
var concatVariables = "";
var settings = "";
var id = "";
var concatId = "";
var city = "";
//var key;
var key = "d8bd2c52b9e7501d9e189357b664b513";
var error = "";

$('#submit').click(function() {
	checkOptionEmpty();

	if (formEmpty !== true) {
		city = $("#city").val();
		if($('#5Days').is(':checked')) {
			concatVariables = (city + "&appid=" + key);
			try {
				settings = {
					async: true,
					crossDomain: true,
					url: 'http://api.openweathermap.org/data/2.5/weather?q=' + concatVariables,
					method: 'GET',
				}

				$.ajax(settings).done(function(data) {
					id = data.id;

					//request para os 5 dias com id
					try {
						settings = {
							async: true,
							crossDomain: true,
							//url: 'http://api.openweathermap.org/data/2.5/forecast',
							url: 'https://samples.openweathermap.org/data/2.5/forecast',
							method: 'GET',					
							data: {id: id, appid: key},
						}

						$.ajax(settings).done(function (data){
							alert("Sucess request weather for fiveDays!");
							clearResults("");
							resultsDays(data);
							setEmpty(city, key);
						});
					} catch(error) {
						showError(error);
						clearResults("");
					}
				});	
			} catch(error) {
				showError(error);
				clearResults("");
			}
		} else {
			try {
				settings = {
					async: true,
					crossDomain: true,
					url: 'http://api.openweathermap.org/data/2.5/weather',
					method: 'GET',
					data: {q: city, appid: key},
				}

				$.ajax(settings).done(function(data) {
					alert("Sucess request weater for today!");
					var day = "now";
					clearResults("");
					results(day, data);
					setEmpty(city, key);
				});	
			} catch(error) {
				showError(error);
				clearResults("");
			}
		}
	}
});					
function showError(error) {
	$("#error").html("Bad request: " + error);
	alert(error);
}
function setEmpty(city, key) {
	city = "";
	key = "";
}
function checkOptionEmpty() {
	if (($("#city").val() == "" && $("#key").val() == "") || ($("#city").val() == "" || $("#key").val() == "")) { 
		formEmpty = true;
	} else {
		formEmpty = false;
	}

	if (formEmpty == true) {
		clearResults("");
		$("#error").html("Please, fill all the fields to proceed.");
	} else {
		$("#error").html("");
	}
}
function results(day, data) {
	id = data.id;
	var country = data.sys.country;
	var cityName = data.name;
	var lat = data.coord.lat;
	var lon = data.coord.lon;
	var weather = data.weather[0].main;
	var weatherDesc = data.weather[0].description;
	var tempMin = data.main.temp_min;
	var tempMax = data.main.temp_max;
	var windSpeed = data.wind.speed;
	var humidity = data.main.humidity;

	var tempMinC = ((tempMin - 273.15)/ 1.8);
	var tempMaxC = ((tempMax - 273.15)/ 1.8);

	var dataShow = 
	"<p>Weather " + day + " in " + cityName + " - " + country + "</p>" +
	"<p>Latitude: " + lat + "</p>" +
	"<p>Longitude: " + lon + "</p>" +
	"<p>Weather: " + weather + "</p>" +
	"<p>Description: " + weatherDesc + "</p>" +
	"<p>Temp Min: " + tempMinC + " Celsius" + "</p>" +
	"<p>Temp Max: " + tempMaxC + " Celsius" + "</p>" +
	"<p>Wind speed: " + windSpeed + " Km/h" + "</p>" +
	"<p>Humidity: " + humidity + " %" + "</p>";

	$("#results").html(dataShow);
	$('html,body').animate({scrollTop: ($("#results").offset().top) -100}, 'slow');
	$("#error").html("");
	clearVariables();
}
function resultsDays(data) {
	var list = data.list;

	for (var i = 0; i <= 7; i++) {	
		//var info = data.list[i].dt;
		var country = data.city.country;
		var cityName = data.city.name;
		var lat = data.city.coord.lat;
		var lon = data.city.coord.lon;
		var weather = data.list[i].weather[0].main;
		var weatherDesc = data.list[i].weather[0].description;
		var weatherIcon = data.list[i].weather[0].icon;
		var tempMin = data.list[i].temp.min;
		var tempMax = data.list[i].temp.max;
		var windSpeed = data.list[i].speed;
		var humidity = data.list[i].humidity;

		var tempMinC = ((tempMin - 273.15)/ 1.8);
		var tempMaxC = ((tempMax - 273.15)/ 1.8);

		var dataShow = 
		"<div class='results"+ "'" +
		"<h3>" + i + "</h3>" +
		"<p>Weather for " +  " in " + cityName + " - " + country + "</p>" +
		"<p>Latitude: " + lat + "</p>" +
		"<p>Longitude: " + lon + "</p>" +
		"<p>Weather: " + weather + "</p>" +
		"<p>Description: " + weatherDesc + "</p>" +
		"<img src='http://openweathermap.org/img/w/" + weatherIcon + ".png'" + "alt=''>" + 
		"<p>Temp Min: " + tempMinC + " Celsius" + "</p>" +
		"<p>Temp Max: " + tempMaxC + " Celsius" + "</p>" +
		"<p>Wind speed: " + windSpeed + " Km/h" + "</p>" +
		"<p>Humidity: " + humidity + " %" + "</p>" + "</div>";

		$('#show').append(dataShow);
		clearVariables();
	}
}
function clearVariables(country, cityName, lat, lon, weather, weatherDesc, weatherIcon, tempMin, tempMax, windSpeed, humidity) {
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
function clearResults(dataShow) {
	$("#results").html(dataShow);
}














