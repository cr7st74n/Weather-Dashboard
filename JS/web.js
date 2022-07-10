var mom = moment().format('MMMM Do YYYY, h:mm:ss a'); //Current date
console.log(mom);



var Number = "5"
var keyCR = "3b7d870a84d61ceaae66a2fbe9363f4a"

function DataCity(){

     $("#startSearch").on("click",function(hey){
          var city= $("#icon_prefix").val();
          console.log('yes');
          Weather_app(city);
     })
}

function Weather_app(city){

     var url = (`http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=${Number}&appid=${keyCR}`);

     var climateAPI = fetch(url).then(function(ResposeWeather){
          var WeatherData = ResposeWeather.json();
          return WeatherData;
     })
     .then(function(ArrData){
          console.log(ArrData[0]);
     })
     .catch(function(err){
          console.log(err);
     })
     ;
} 

console.log(DataCity());