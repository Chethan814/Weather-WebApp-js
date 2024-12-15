const apiKey = "c427752efc504d1fb23141033241212";
// let URL = "http://api.weatherapi.com/v1/current.json";
let location = "bangalore";

function finalUrl(apiKey, url, loc) {
  let data = `${url}?key=${apiKey}&q=${loc}`;
  return data;
}



export let API_URL = finalUrl(apiKey, URL, location);

// console.log(API_URL);
