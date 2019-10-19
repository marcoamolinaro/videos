import axios from 'axios';

const KEY = 'AIzaSyBpzqFFRso57shhRrZDfqTskCeG1a67uXg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
