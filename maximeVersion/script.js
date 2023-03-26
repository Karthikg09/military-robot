/* Constants. */
const DAYS = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 
  'August', 'September', 'October', 'November', 'December'
];

const PARAMETERS = {
    'Temperature': 'Temperature',
    'Humidity': 'Humidity',
    'AirQuality': 'Gas'
}


/**
 * 
 * @param {String} read The GET parameter.
 * @param {String} value The element's ID.
 */
const getAtmosphereData = (read, value) => {
    const xhr = new XMLHttpRequest;
    xhr.open('GET', `read${read}`, true);
    xhr.send();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const element = document.getElementById(`${value}Value`);
            element.innerHTML = xhr.responseText;
        }
    }
}

/**
 * Send the atmosphere data with a GET request to the PHP server.
 * Get the result and print it in the console.
 */
const sendAtmosphereData = () => {
    const xhr = new XMLHttpRequest;
    const request = `setPOS?servoPOS1=${pos1}&servoPOS2=${pos2}`;
    xhr.open('GET', request, true);
    xhr.send();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };
}

/**
 * Refresh the datetime on the page.
 */
const setDatetime = () => {
  // Time and date elements from the DOM.
  const timeElement = document.getElementById('time');
  const dateElement = document.getElementById('date');

  // Get the today datetime and format it to the
  // <day_name>, <day_number>-<month_name>-<year> format.
  const date = new Date;
  const dayName = DAYS[date.getDay()];
  const dayNumber = date.getDate();
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();

  // Set the local time with the local format.
  timeElement.innerHTML = date.toLocaleTimeString();
  // Set the date with the format specified above.
  dateElement.innerHTML = `${dayName}, ${dayNumber}-${month}-${year}`;
}


window.onload = () => {
    // Sliders and their value outputs from the DOM.
    const firstSlider = document.getElementById('aim-angle');
    const firstOutput = document.getElementById('aim-angle-value');
    const secondSlider = document.getElementById('pan-servo');
    const secondOutput = document.getElementById('pan-servo-value');
    
    // Set teh default value according to the slider value.
    firstOutput.innerHTML = firstSlider.value;
    firstSlider.oninput = () => { // Refresh the value when edited.
        firstOutput.innerHTML = firstSlider.value;
        sendAtmosphereData(firstOutput.innerHTML, secondOutput.innerHTML);
    }

    secondOutput.innerHTML = secondSlider.value;
    secondSlider.oninput = () => {  // Same here with the 2nd slider.
        secondOutput.innerHTML = secondSlider.value;
        sendAtmosphereData(firstOutput.innerHTML, secondOutput.innerHTML);
    }

    setInterval(() => {  // Get the atmosphere data every 2 seconds.
        Object.entries(PARAMETERS).forEach(([read, value]) => {
            // Read is the GET parameter and value is the element ID.
            getAtmosphereData(read, value);
        });
    }, 2000);

    setInterval(() => { // Refresh the datetime every seconds.
        setDatetime();
    }, 1000);
}
