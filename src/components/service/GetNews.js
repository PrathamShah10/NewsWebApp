import axios from 'axios';
export function GetNews(category) {
    const API_KEY = '9c6672843352485fbf99ce6139ede318';
    const API_ENDPOINT = `https://newsapi.org/v2/top-headlines?country=us&category=${category}`;
    return axios.get(`${API_ENDPOINT}&apiKey=${API_KEY}`)
}