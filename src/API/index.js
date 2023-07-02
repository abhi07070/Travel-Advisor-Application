import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
    // console.log(type)
    try {
        const {
            data: { data },
        } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': 'b560460b39msh7a77e09e3268cbfp1f229cjsnf830ea6bd72a',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        // console.log(data)
        return data;
    } catch (error) {
        console.log(`Fetch data Error : ${error}`)
    }
}