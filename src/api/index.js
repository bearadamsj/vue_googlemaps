import requests from "./request";
export const reqTimeZone = (lat, lng, key) => {
    return requests({
        url: `get-time-zone?key=${key}&format=json&by=position&lat=${lat}&lng=${lng}`,
        method: 'get'
    })
}