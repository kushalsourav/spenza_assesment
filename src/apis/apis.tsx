import axios from "axios";


export const getLatLong = async (region: string) => {

    try {
        const result = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${region}`)
        return result;
    } catch (error) {
        console.log(error)
    }
}

export const getData = async () => {

    try {
        const data = await axios.get('https://cors-anywhere.herokuapp.com/https://s3.ap-south-1.amazonaws.com/hire.isimplexity/data.js')
        return data
    } catch (error) {
        console.log(error)
    }
}
