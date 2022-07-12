var mom;
for(var i = 0; i<5; i++ ){
     mom = moment().add([i], 'days').calendar();
     $(`#date${i}`).text(mom);
}



var Number = "5"
var keyCR = "3b7d870a84d61ceaae66a2fbe9363f4a"


function DataCity(){

     $("#startSearch").on("click",function(hey){
          var city= $("#icon_prefix").val();
          var CityU = city.toUpperCase();
          $("#city").text(CityU).append(mom);
          $("#temp").text("").append("Temp: ");
          $("#wind").text("").append("Wind: ");
          $("#humidity").text("").append("Humidity: ");
          //$("#uv").text("").append("UV index: ");
          Weather_app(city);
     })
}

function Weather_app(city){

     var url = (`http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=${Number}&appid=${keyCR}`);
     var cityName;
     var latCity;
     var lonCity

     var climateAPI = fetch(url).then(function(ResposeWeather){
          var WeatherData = ResposeWeather.json();
          return WeatherData;
     })
     .then(function(ArrData){
          cityName = ArrData[0].name;
          console.log(cityName);
          latCity = ArrData[0].lat;
          //console.log(latCity);
          lonCity = ArrData[0].lon;
          //console.log(lonCity);  

          passData(latCity,lonCity);

     })
     .catch(function(err){
          console.log(err);
          console.log('here is an error');
     })
     ;
} 

function passData(lat,long){
     var url = (`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&cnt=5&appid=${keyCR}`);

     var DataWeather = fetch(url).then(function(ResponseWeb){
          var WeatherData = ResponseWeb.json();
          return WeatherData;
     })
     .then(function(conditions){
          var data = conditions.list;
          console.log(conditions);
          var temp = data[0].main.temp;
          console.log(temp);
          var wind = data[0].wind.speed;
          console.log(wind);
          var hum = data[0].main.humidity
          console.log(hum);

          displayResults(temp,wind,hum);

     })
     .catch(function(err){
          console.log(err);
          console.log('here is an error');
     })
}

function displayResults(tempe,wind,hum){
     var TempFa = ((tempe-273.15)*(9/5) + 32);
     $("#temp").append(TempFa.toFixed(2)).append(" F");
     $("#wind").append(wind).append(" MPH");
     $("#humidity").append(hum).append("%");

}



console.log(DataCity());