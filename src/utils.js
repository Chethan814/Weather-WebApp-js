import { locations } from "./dom"
export const ProcessData = (data) => {
    let currentloc = currentLocations(data)
    locations.innerHTML = currentloc
}

function currentLocations(data){
    let {location : {name, region}} = data
    return name

}