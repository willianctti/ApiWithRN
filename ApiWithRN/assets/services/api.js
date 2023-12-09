
export const fetchMovies = async () => {
const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b613449f4amsh6e80044908dddefp1f2c62jsn9b532202b794',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	return result.d || [];
} catch (error) {
	console.error(error);
}
};
