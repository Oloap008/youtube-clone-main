const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export async function fetchFromApi(url) {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, options);
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}
