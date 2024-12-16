import { DOMElements } from "./dom";

// ? Main Export function

export const ProcessData = (data) => {
  currentLocations(data, DOMElements);
  currentDate(data, DOMElements);
  temperature(data, DOMElements);
  moreDetail(data, DOMElements);
};

// This is location update function

let currentLocations = (data, DOM) => {
  let {
    location: { name, region, country },
  } = data;
  DOM.city.innerHTML = name;
  DOM.country.innerHTML = String(country).substring(0, 2).toUpperCase();
};

// This is Date and Day update function

let currentDate = (data, Dom) => {
  let {
    location: { localtime },
  } = data;
  let time = new Date(localtime);
  // console.log(time.getDay());

  Dom.date.innerHTML = formatDate(time);
  Dom.day.innerHTML = formatDay(time);

  Dom.day1.innerHTML = String(formatDay(time,1)).substring(0,3)
  Dom.day2.innerHTML = String(formatDay(time,2)).substring(0,3)
  Dom.day3.innerHTML = String(formatDay(time,3)).substring(0,3)
  Dom.day4.innerHTML = String(formatDay(time,4)).substring(0,3)
};

const formatDate = (date) => {
  let monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = monthNames[date.getMonth()];
  let day = date.getDate();
  let year = date.getFullYear();
  // console.log(`${day} ${month} ${year}`);
  return `${day} ${month} ${year}`;
};

const formatDay = (date , nextday = 0 ) => {
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thuesday",
    "Friday",
    "Saturday",
  ];
  let day = dayNames[date.getDay() + nextday];
  return day;
};

// This is temperature and description update function

let temperature = (data, dom) => {
  let {
    current: {
      temp_c,
      condition: { text, icon },
    },
  } = data;
  console.log(temp_c, icon, text);

  dom.temperature.innerHTML = temp_c;
  dom.weatherDesc.innerHTML = text;
};

// This is PRECIPITATION , HUMIDITY and WIND update

let moreDetail = (data, dom) => {
  let {
    current: { precip_in, wind_kph, humidity },
  } = data;

  dom.precipitationValue.innerHTML = precip_in;
  dom.humidityValue.innerHTML = humidity;
  dom.windValue.innerHTML = wind_kph;
};

