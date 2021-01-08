import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export function fetchProducts() {
  return axios.get(`${API_URL}/products`);
}

export function fetchLocalMapBox(local: string) {
  return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`);
}