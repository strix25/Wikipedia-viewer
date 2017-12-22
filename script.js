var randomBtn = document.getElementById("random");
randomBtn.onclick = function (){
    var win = window.open("https://en.wikipedia.org/wiki/Special:Random", '_blank');
    win.focus();
}


function potato(lat, long){
    

   
    let link = `https://fcc-weather-api.glitch.me/api/current?lon=${long}&lat=${lat}`;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', link);
    xhr.onload = function() {
        if (this.status === 200) {
            var data = JSON.parse(xhr.responseText);

            locationn.innerHTML = data.name;
            let deg = data.main.temp *10;
            currentTempInCels = Math.round(deg)/10;
            temp.innerHTML = currentTempInCels;
            weather.innerHTML = data.weather[0].main;
            icon.src = data.weather[0].icon;

            console.log(data);
            console.log("first part");
        }
        else {
            alert('Request failed.  Returned status of ' + xhr.status);
            console.log("second part");
        }
    };
    xhr.send(null);     
}
  
// mes.onclick = function(){
    
//     let currentTempUnit = mes.innerHTML;
//     let newTempUnit = currentTempUnit == "C" ? "F" : "C";
//     mes.innerHTML = newTempUnit;

//     if(newTempUnit == "F"){
//         let fahTemp = Math.round(parseInt(temp.innerHTML)*9 / 5 + 32);
//         temp.innerHTML = fahTemp;
//     }else{
//         temp.innerHTML = currentTempInCels;
//     }
// };