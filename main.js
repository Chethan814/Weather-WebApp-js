import "./style.css";

const apiKey = "f95e19da288c4a8192905637242311";
let requestUrl = "http://api.weatherapi.com/v1/current.json";
let location = "bangalore";

function finalUrl(apiKey, Url, loc) {
  let url = `${requestUrl}?key=${apiKey}&q=${loc}`;
  return url;
}

let finalRequestUrl = finalUrl(apiKey, requestUrl, location);

fetch(finalRequestUrl)
  .then((respone) => {
    let data = respone.json();
    return data
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error=>{
    console.log('error',error);
  }))

