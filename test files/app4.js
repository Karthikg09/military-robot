setInterval(function() {
    // Call a function repetatively with 2 Second interval
    getTemperatureData();
    getHumidityData();
    getAirQualityData();
  }, 2000); 
  
  setInterval(function() {
    // Call a function repetatively with 1 Second interval
    Time_Date();
  }, 1000); 

  function getTemperatureData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("TemperatureValue").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "readTemperature", true);
    xhttp.send();
  }

  function getHumidityData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      document.getElementById("HumidityValue").innerHTML =
      this.responseText;
      }
    };
    xhttp.open("GET", "readHumidity", true);
    xhttp.send();
  }

  function getAirQualityData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("AirQualityValue").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "readGas", true);
    xhttp.send();
  }

  function sendData(pos1, pos2) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
};
xhttp.open("GET", "setPOS?servoPOS1="+pos1+"&servoPOS2="+pos2, true);
xhttp.send();
} 
  var slider1 = document.getElementById("myRange1");
  var output1 = document.getElementById("demo1");
  output1.innerHTML = slider1.value;
  slider1.oninput = function() {
    output1.innerHTML = this.value;
    sendData(output1.innerHTML, output2.innerHTML);
  }  
  var slider2 = document.getElementById("myRange2");
  var output2 = document.getElementById("demo2");
  output2.innerHTML = slider2.value;
  slider2.oninput = function() {
    output2.innerHTML = this.value;
    sendData(output1.innerHTML, output2.innerHTML);
  }        
       



  function Time_Date() {
    var t = new Date();
    document.getElementById("time").innerHTML = t.toLocaleTimeString();
    var d = new Date();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    document.getElementById("date").innerHTML = dayNames[d.getDay()] + ", " + d.getDate() + "-" + monthNames[d.getMonth()] + "-" + d.getFullYear();
  }


  

    // Popup elements
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupMessage = document.getElementById("popup-message");
const popupClose = document.getElementById("popup-close");

window.onload = function() {
// Temperature and air quality values
// let temperature = parseInt(document.getElementById("TemperatureValue").innerHTML);
let airQuality = parseInt(document.getElementById("AirQualityValue").textContent);

// get the temperature value element
var tempValueElement = document.getElementById("TemperatureValue");

// get the current temperature value
var currentTempValue = tempValueElement.innerHTML;
console.log(currentTempValue);
}


// Temperature and air quality limits
const temperatureLimit = 20;
const airQualityLimit = 500;

// Audio elements
const temperatureWarningAudio = new Audio("https://cdn.jsdelivr.net/gh/Karthikg09/military-robot@main/test%20files/warning.mp3");
const airQualityWarningAudio = new Audio("air-quality-warning.mp3");

// Check temperature and air quality values every second
setInterval(() => {
  // Get temperature and air quality values from sensors or API
  // For example, using AJAX or fetch

  // Check if temperature or air quality exceeds the limit
  if (currentTempValue > temperatureLimit) {
    // Show temperature warning popup
    showPopup("Temperature Warning", "The temperature has exceeded the limit.", temperatureWarningAudio);
  } else if (airQuality > airQualityLimit) {
    // Show air quality warning popup
    showPopup("Air Quality Warning", "The air quality has exceeded the limit.", airQualityWarningAudio);
  }
}, 1000);

// Show popup with title, message, and audio
function showPopup(title, message, audio) {
  // Set popup title and message
  popupTitle.textContent = title;
  popupMessage.textContent = message;

  // Play audio
  audio.play();

  // Show popup and blink background
  popup.style.display = "block";
  blinkBackground();

  // Close popup when close button is clicked
  popupClose.addEventListener("click", hidePopup);
}

// Hide popup and stop blinking background
function hidePopup() {
  popup.style.display = "none";
  stopBlinkingBackground();
}

// Blink background with red color
function blinkBackground() {
  document.body.style.backgroundColor = "red";
  setTimeout(() => {
    document.body.style.backgroundColor = "black";
  }, 500);
}

// Stop blinking background
function stopBlinkingBackground() {
  document.body.style.backgroundColor = "black";
}



