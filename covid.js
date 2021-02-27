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



// document.getElementById("covidSubmit").addEventListener("click", function(event) {
//     console.log("ENTERED");
//     event.preventDefault();
//     const value = document.getElementById("covidInput").value;
//     if (value === "")
//       return;
//     console.log(value);
// })