var mom = moment().format('MMMM Do YYYY, h:mm:ss a'); //Current date
console.log(mom);



var Number = "5"
var keyCR = "3b7d870a84d61ceaae66a2fbe9363f4a"
var key2 = "c59053e9cfd68c4fcf70f81e077a7583"

function DataCity(){

     $("#startSearch").on("click",function(hey){
          var city= $("#icon_prefix").val();
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
          console.log(latCity);
          lonCity = ArrData[0].lon;
          console.log(lonCity);  

          passData(latCity,lonCity);
     })
     .catch(function(err){
          console.log(err);
          console.log('here is an error');
     })
     ;
} 

function passData(lat,long){

     var url = (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${keyCR}`);

     var DataWeather = fetch(url).then(function(ResponseWeb){
          var WeatherData = ResponseWeb.json();
          return WeatherData;
     })
     .then(function(conditions){
          var temp = conditions;
          console.log("adsfaf")
          console.log(temp.main);

     })
     .catch(function(err){
          console.log(err);
          console.log('here is an error');
     })

}




console.log(DataCity());