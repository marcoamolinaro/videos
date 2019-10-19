import axios from 'axios';

const KEY = 'AIzaSyCIBEdpoET1vHl0MlaBqZwleK-BlMv2Hi0';

export default axios.create({
    baseURL: https://www.googleapis.com/youtube/v3,
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
