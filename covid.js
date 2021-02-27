//Retrieving data for major cities 
document.addEventListener("DOMContentLoaded", function() {
    let country1 = "US";
    let country2 = "China";
    let country3 = "India";
    let country4 = "Japan";
    //retrieving China's stats
    fetch('https://covid-api.mmediagroup.fr/v1/cases?country=' + country2)
    .then(res => res.json())
    .then(function(json) {
        console.log(json);
        let result1 = '<h2>Population: ' + json.All.population + '</h2>';
        let result2 = '<h2>Deaths: ' + json.All.deaths + '</h2>';
        let result3 = '<h2>Recovered: ' + json.All.recovered + '</h2>';
        document.getElementById("population2").innerHTML = result1;
        document.getElementById("deaths2").innerHTML = result2;
        document.getElementById("recovery2").innerHTML = result3;
    })
    //retrieving U.s stats
    fetch('https://covid-api.mmediagroup.fr/v1/cases?country=' + country1)
    .then(res => res.json())
    .then(function(json) {
        console.log(json);
        let result1 = '<h2>Population: ' + json.All.population + '</h2>';
        let result2 = '<h2>Deaths: ' + json.All.deaths + '</h2>';
        let result3 = '<h2>Recovered: ' + json.All.recovered + '</h2>';
        document.getElementById("population1").innerHTML = result1;
        document.getElementById("deaths1").innerHTML = result2;
        document.getElementById("recovery1").innerHTML = result3;
    })
    //retrieving India stats
    fetch('https://covid-api.mmediagroup.fr/v1/cases?country=' + country3)
    .then(res => res.json())
    .then(function(json) {
        console.log(json);
        let result1 = '<h2>Population: ' + json.All.population + '</h2>';
        let result2 = '<h2>Deaths: ' + json.All.deaths + '</h2>';
        let result3 = '<h2>Recovered: ' + json.All.recovered + '</h2>';
        document.getElementById("population3").innerHTML = result1;
        document.getElementById("deaths3").innerHTML = result2;
        document.getElementById("recovery3").innerHTML = result3;
    })
    //retrieving Japan stats
    fetch('https://covid-api.mmediagroup.fr/v1/cases?country=' + country4)
    .then(res => res.json())
    .then(function(json) {
        console.log(json);
        let result1 = '<h2>Population: ' + json.All.population + '</h2>';
        let result2 = '<h2>Deaths: ' + json.All.deaths + '</h2>';
        let result3 = '<h2>Recovered: ' + json.All.recovered + '</h2>';
        document.getElementById("population4").innerHTML = result1;
        document.getElementById("deaths4").innerHTML = result2;
        document.getElementById("recovery4").innerHTML = result3;
    })

  });


  document.getElementById('covidSubmit').addEventListener('click', function(event){
    event.preventDefault();
    //let result = document.getElementById('covidResults');
    let country = document.getElementById('covidInput').value;
    console.log(country);
    fetch('https://covid-api.mmediagroup.fr/v1/cases?country=' + country)
    .then(res => res.json())
    .then(function(json) {
        console.log(json);
        let result = '<h2> returned object for Japan' + json.All.confirmed;
        document.getElementById("covidResults").innerHTML = result;
    })
});

