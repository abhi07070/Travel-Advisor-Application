import axios from 'axios';

const url = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

const options = {
    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
    },
    headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
};

export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(url, options)
    } catch (error) {
        console.log(`Fetch data Error : ${error}`)
    }
}