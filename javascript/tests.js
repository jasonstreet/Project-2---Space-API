var myDataAPOD; // All data requested by API - APOD only.

var getAPOD = document.getElementById("showAPOD").addEventListener("click", loadMyDataAPOD, false);

function loadMyDataAPOD() {

    var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", "https://api.nasa.gov/planetary/apod?api_key=h27SgJssM7Qh0G0xPFPBky4D8HFyfsL0yy9KSsBq", true);
    
    myRequest.onload = function () {
        
        if (myRequest.readyState === 4 && myRequest.status === 200) {
            
            var myDataAPOD = JSON.parse(myRequest.responseText);
            console.log(myDataAPOD); // - Test if the API is properly linked on click. This should display an image URL in the web console
        }
    
    };
    myRequest.send();
    
}