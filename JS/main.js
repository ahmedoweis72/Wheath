var days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



document.getElementById("search").addEventListener("keydown", function (eInfo) {
    weather(eInfo.target.value);
})

var h5 = document.getElementById("loc");
var h1 = document.getElementById("temp");
var imgone = document.getElementById("img");
var imgtwo = document.getElementById("imgtwo");
var imgthree = document.getElementById("imgthree");
var txt = document.querySelector(".set");
var wind = document.querySelector(".wind");
var wind_dir = document.querySelector(".wind_dir");
var tempmddl = document.getElementById("tempmddl");
var tempmddl2 = document.getElementById("tempmddl2");
var tempmddl3 = document.getElementById("tempmddl3");
var tempmddl4 = document.getElementById("tempmddl4");
var tempmddl5 = document.getElementById("tempmddl5");
var tempmddl6 = document.getElementById("tempmddl6");


deafult()
 function deafult() {
    var http = new XMLHttpRequest();
    http.open("get", `https://api.weatherapi.com/v1/forecast.json?key=edb6f398f1024405987212704241206&q=cairo&days=3`);
    http.send();
    http.addEventListener("load",function(){
     
            var res = JSON.parse(http.response);
            console.log(res);
            tempmddl.innerHTML=res.forecast.forecastday[1].day.maxtemp_c+"c";
            tempmddl2.innerHTML = res.forecast.forecastday[1].day.mintemp_c+"c";
            tempmddl3.innerHTML = res.forecast.forecastday[1].day.condition.text;
            tempmddl4.innerHTML = res.forecast.forecastday[2].day.maxtemp_c+"c";
            tempmddl5.innerHTML = res.forecast.forecastday[2].day.mintemp_c+"c";
            tempmddl6.innerHTML = res.forecast.forecastday[2].day.condition.text;
            imgone.setAttribute("src", res.current.condition.icon);
            imgtwo.setAttribute("src", res.forecast.forecastday[0].day.condition.icon);
            imgthree.setAttribute("src", res.forecast.forecastday[1].day.condition.icon);
            h5.innerText = res.location.name;
            h1.innerText = res.current.temp_c;
            txt.innerHTML = res.current.condition.text;
            wind.innerHTML = `<img src="Images/icon-wind.png" alt="">` + res.current.wind_mph;
            wind_dir.innerHTML = `<img src="Images/icon-compass.png" alt="">` + res.current.wind_dir;
          

            var currentdate = new Date(res.current.last_updated.replace(" ", "T"));
            var nextDate =new Date(res.forecast.forecastday[1].date.replace(" ", "T"));
            var next1Date =new Date(res.forecast.forecastday[2].date.replace(" ", "T"));

            console.log(currentdate.getDay());
            document.getElementById("currentDay").innerHTML = days[currentdate.getDay()];
            document.getElementById("currentDate").innerHTML = `${currentdate.getDate() +month[currentdate.getMonth()]}`
            document.getElementById("nextDay").innerHTML =days[nextDate.getDay()];
            document.getElementById("next1Day").innerHTML =days[next1Date.getDay()];


        
    })
}
function weather(location) {
    var http = new XMLHttpRequest();
    http.open("get", `https://api.weatherapi.com/v1/forecast.json?key=edb6f398f1024405987212704241206&q=${location}&days=3`);
    http.send();
    http.addEventListener("readystatechange", function () {
        if (http.readyState == 4) {
            var res = JSON.parse(http.response);
            console.log(res);


            console.log(imgone);
            h5.innerText = res.location.name;
            h1.innerText = res.current.temp_c;

            imgone.setAttribute("src", res.current.condition.icon);
            txt.innerHTML = res.current.condition.text;
            wind.innerHTML = `<img src="Images/icon-wind.png" alt="">` + res.current.wind_mph;
            wind_dir.innerHTML = `<img src="Images/icon-compass.png" alt="">` + res.current.wind_dir;

              tempmddl.innerHTML=res.forecast.forecastday[1].day.maxtemp_c+"c";
            tempmddl2.innerHTML = res.forecast.forecastday[1].day.mintemp_c+"c";
            tempmddl3.innerHTML = res.forecast.forecastday[1].day.condition.text;
            tempmddl4.innerHTML = res.forecast.forecastday[2].day.maxtemp_c+"c";
            tempmddl5.innerHTML = res.forecast.forecastday[2].day.mintemp_c+"c";
            tempmddl6.innerHTML = res.forecast.forecastday[2].day.condition.text;


        }
    })
}

