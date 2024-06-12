
export const FireApi = async () => {
    const baseURL = "https://api.themoviedb.org/3";
    const apiKey = '2ec0d66f5bdf1dd12eefa0723f1479cf'; // Use consistent variable name

    try {
        const response = await fetch(`${baseURL}/trending/all/day?api_key=${apiKey}`);
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        } else {
            return { code: response.status, message: response.statusText };
        }
    } catch (error) {
        return { code: 500, message: error.message };
    }
};

export const GetMovieByGenre = async (id) => {
    const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie';
    const apiKey = '2ec0d66f5bdf1dd12eefa0723f1479cf'; // Use consistent variable name
    const urlGen = `${movieByGenreBaseURL}?api_key=${apiKey}&with_genres=${id}`;

    try {
        const response = await fetch(urlGen);
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        } else {
            return { code: response.status, message: response.statusText };
        }
    } catch (error) {
        return { code: 500, message: error.message };
    }
};
