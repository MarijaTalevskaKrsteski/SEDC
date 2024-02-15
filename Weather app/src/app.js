//the first page is already displayed when the app is loaded, because of the css
//we need to show app title and greeting

let header = document.getElementById("header");
header.innerText = "Weather App";

let greetingDiv = document.getElementById("greetingResult");
greetingDiv.innerText = "Welcome to the best weather app";

let aboutDiv = document.getElementById("aboutResult");
aboutDiv.innerHTML = `
    We combine weather data, technology, and human insight to improve lives and businesses. 
    <br /><br />
    Contact us on: <a href="mailto:talevska.marija@gmail.com">E-mail</a>
    <br /><br />
    <img src="../src/img/1962-scan0003.webp" />`; 

//NAVIGATION MENU - BETTER WAY
let navigationMenuService = {
    navigationLinks : document.getElementsByClassName("nav-link"),
    pages : document.getElementsByClassName("page"),
    citySearchInput : document.getElementById("citySearchInput"),
    citySearchBtn : document.getElementById("citySearchBtn"),
    displayPage : function (index){
        //we hide all the pages, because we don't know which one is active
        for(let page of this.pages){
            page.style.display = "none";
        }
        
        this.pages[index].style.display = "block";
    },
    activateMenuItem: function(linkElement){
        for(let navLink of this.navigationLinks){
            navLink.parentElement.classList.remove("active");
        }
        linkElement.parentElement.classList.add("active");
    },
    registerClickEventListeners : function(){
        for(let i = 0; i < this.navigationLinks.length; i++){
            //navigationLinks contains <a> elements
            this.navigationLinks[i].addEventListener("click", function(e){
                 //if we click on first <a> element, we need to show first page
                 //if we click on <a> element with index 0, we need to show page with index 0

                 //this in an event listener -> element that is target of the event
                 //that is why here we use the name of the object directly
                 navigationMenuService.displayPage(i);

                 //add class active to the parent li item
                 navigationMenuService.activateMenuItem(this); //this -> target of the event, a tag that was clicked
            })
        }

        this.citySearchBtn.addEventListener("click", function(event) {
            event.preventDefault();
            //this in an event listener -> element that is target of the event
           //that is why here we use the name of the object directly
           weatherApiService.getWeatherData(navigationMenuService.citySearchInput.value);
            //console.log(`Search input: ${navigationMenuService.citySearchInput.value}`);
        })
    }
}

let statisticsService = {
    calculateStatistics: function(data){
        // let tempSum = 0;
        // let humiditySum = 0;
        // let minTemp = data.list[0].main.temp;
        // let maxTemp = data.list[0].main.temp;
        // let minHumidity = data.list[0].main.humidity;
        // let maxHumidity = data.list[0].main.humidity;

        // for(let listItem of data.list){
        //     tempSum += listItem.main.temp;
        //     humiditySum += listItem.main.humidity;

        //     if(listItem.main.temp < minTemp){
        //         minTemp = listItem.main.temp;
        //     }
        //     if(listItem.main.temp > maxTemp){
        //         maxTemp = listItem.main.temp;
        //     }
        //     if(listItem.main.humidity < minHumidity){
        //         minHumidity = listItem.main.humidity;
        //     }
        //     if(listItem.main.humidity > maxHumidity){
        //         maxHumidity = listItem.main.humidity;
        //     }
        // }

        // let avgTemp = tempSum / data.list.length;
        // let avgHumidity = humiditySum / data.list.length;

        // let result = {
        //     averageTemperature: avgTemp,
        //     averageHumidity: avgHumidity,
        //     minTemperature: minTemp,
        //     maxTemperature: maxTemp, 
        //     minHumidity: minHumidity,
        //     maxHumidity: maxHumidity
        // }
        // return result;

        //REDUCE
        let initialValues = {
            tempSum: 0,
            humiditySum: 0,
            minTemperature: data.list[0].main.temp,
            maxTemperature: data.list[0].main.temp, 
            minHumidity: data.list[0].main.humidity,
            maxHumidity: data.list[0].main.humidity
        }
        let res = data.list.reduce(function(result, item){
            
            result.tempSum += item.main.temp;
            result.humiditySum += item.main.humidity;

            if(item.main.temp < result.minTemperature){
                result.minTemperature = item.main.temp;
            }
            if(item.main.temp > result.maxTemperature){
                result.maxTemperature = item.main.temp;
            }
            if(item.main.humidity < result.minHumidity){
                result.minHumidity = item.main.humidity;
            }
            if(item.main.humidity > result.maxHumidity){
                result.maxHumidity = item.main.humidity;
            }

            return result;
        }, initialValues);

        //initialValues is the object which we use as initial vale for reduce
        //it is being passed in each iteration of reduce
        //in each iteration of reduce, the values of its properties change
        //at the end we have sums and mins and maxs in initialValues properties
        //initialValues is passed by reference in each iteration as the result param
        console.log(initialValues);

        //here we make object that contains the six result values that we need for home page
        let result = {
            averageTemperature: initialValues.tempSum / data.list.length,
            averageHumidity: initialValues.humiditySum / data.list.length,
            minTemperature: initialValues.minTemperature,
            maxTemperature: initialValues.maxTemperature, 
            minHumidity: initialValues.minHumidity,
            maxHumidity: initialValues.maxHumidity
        }
        return result;

        //REDUCE
    }
}

let uiService = {
    displayStatistics: function(statisticsResult){
        document.getElementById("statisticsResult").innerHTML = "";
        document.getElementById("statisticsResult").innerHTML = `
        <div class="container">
            <div class="row">
                <h2 class="col-sm-6">AVG TEMP: ${statisticsResult.averageTemperature} C</h2>
                <h2 class="col-sm-6">AVG HUMIDITY: ${statisticsResult.averageHumidity} %</h2>
            </div>
            <div class="row">
                <h2 class="col-sm-6">MIN TEMP: ${statisticsResult.minTemperature} C</h2>
                <h2 class="col-sm-6">MIN HUMIDITY: ${statisticsResult.minHumidity} %</h2>
            </div>
            <div class="row">
                <h2 class="col-sm-6">MAX TEMP: ${statisticsResult.maxTemperature} C</h2>
                <h2 class="col-sm-6">MAX HUMIDITY: ${statisticsResult.maxHumidity} %</h2>
            </div>
        </div>
        `
    },
    displayTable: function(tableResult) {
        let myTable = document.getElementById("hourlyTableResult");
        let tableContent = `<table>`;
        tableResult.list.forEach(function (listItem) {
            console.log(listItem.weather[0]);
            tableContent += `
            <tr>
                <td><img src="http://openweathermap.org/img/w/${listItem.weather[0].icon}.png"/></td>
                <td>${listItem.weather[0].description}</td>
                <td>${timeConverter(listItem.dt)}</td>
                <td>${listItem.main.temp}&#8451</td>
                <td>Humidity: ${listItem.main.humidity}%</td>
                <td>Wind: ${listItem.wind.speed}km/h</td>           
            </tr>
            `;            
        });
        tableContent += `</table>`;
        myTable.innerHTML = tableContent;
    }
}

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}
// async function getWeatherData(city){

// }

let weatherApiService = {
    getWeatherData: async function(city){
        //call
        // fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=f369d0b7d1652d9e091fe8121aa44ede`)
        // .then(function(response){
        //     return response.json();
        // })
        // .then(function(data){
        //     console.log(data);
        //     //1. find statistics
        //     let statisticsResult = statisticsService.calculateStatistics(data);
        //     //2. display the statistics
        //     uiService.displayStatistics(statisticsResult);
        // })
        // .catch(function(error){
        //     console.log("Error");
        //     console.log(error);
        // })
        
        try{
            let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=f369d0b7d1652d9e091fe8121aa44ede`;
            let response = await fetch(url);
            let data = await response.json();
            //1. find statistics
            let statisticsResult = statisticsService.calculateStatistics(data);
            //2. display the statistics
            uiService.displayStatistics(statisticsResult);
            uiService.displayTable(data);
        }
        catch{
            console.log("An error occurred");
        }
    }
}


navigationMenuService.registerClickEventListeners();
//weatherApiService.getWeatherData("skopje");
//weatherApiService.getWeatherData("kumanovo");


