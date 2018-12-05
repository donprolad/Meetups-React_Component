const CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com/";
const CATEGORIES_API_URL = "https://api.meetup.com/2/categories";
const API_KEY = "?key=";
const SIGN = "&sign=true";

const SEARCH_URL = CORS_ANYWHERE + CATEGORIES_API_URL + API_KEY + SIGN;
export default SEARCH_URL;
