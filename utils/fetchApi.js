import axios from "axios";

export const baseUrl ='https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '54ed14c12fmsh999ec3c831b8bcep1eff6ajsne9ca8d29f381'
        }
    });
    return data;
}