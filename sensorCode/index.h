const char MAIN_page[] PROGMEM = R"=====(
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Karthikg09/military-robot@main/sensorCode/app.css">
    <title>Robot control room</title>
</head>
<body>
    <section>
        <img src="https://raw.githubusercontent.com/Karthikg09/military-robot/main/sensorCode/background.png" alt="" class="bg">
        <img src="https://raw.githubusercontent.com/Karthikg09/military-robot/main/sensorCode/army.png" alt="" class="tank">
        <img src="https://raw.githubusercontent.com/Karthikg09/military-robot/main/sensorCode/foreground.png" alt="" class="fg">
        <div class="login">
            <h1>Robot Control Room </h1>
            <div class="inputBox">
                <p>
                <i class="icn fa fa-thermometer-half"></i> 
                <span class="dht-labels">&nbsp; Temperature : </span> 
                <span id="TemperatureValue">0</span>
                <sup class="units">&deg;C</sup>
            </p>
            <p>
                <i class="icns fa fa-tint"></i>
                <span class="dht-labels">&nbsp; Humidity : </span>
                <span id="HumidityValue">0</span>
                <sup class="units">%</sup>
            </p>
            <p>
                <i class="icn fa fa-smog"></i> 
                <span class="dht-labels">&nbsp; Air Quality : </span> 
                <span id="AirQualityValue">0</span>
                <sup class="units">&nbsp;ppm</sup>
            </p>
            <br>
        <!-- servo motor  -->
            <div class="slidecontainer">
                <input type="range" min="0" max="180" value="3" class="slider" id="myRange1">
                <p> <i class="aim fas fa-crosshairs"></i> &nbsp; Aim Angle : <span id="demo1"></span></p>
            </div>

            <div class="slidecontainer">
                <input type="range" min="0" max="180" value="90" class="slider" id="myRange2">
                <p><i class="aim fas fa-crosshairs"></i> &nbsp; Pan Servo: <span id="demo2"></span></p>
            </div>
            <p>
                <i class="clock far fa-clock"></i>
                <span class="clock-info">Time :</span>
                <span id="time" style="font-size:1.4rem;"></span>
                <br>            
                <i class="clock far fa-calendar-alt"></i>
                <span class="clock-info">Date :</span>
                <span id="date" style="font-size:1.4rem;"></span>
            </P>
            </div>
        </div>
    </section>
    <script src="https://cdn.jsdelivr.net/gh/Karthikg09/military-robot@main/sensorCode/app.js"></script>
</body>
</html>
)=====";