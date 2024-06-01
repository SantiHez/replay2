const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://netflix54.p.rapidapi.com/search/',
  params: {
    query: 'stranger',
    offset: '0',
    limit_titles: '50',
    limit_suggestions: '20',
    lang: 'en'
  },
  headers: {
    'X-RapidAPI-Key': '1ba539d8e4mshc68e92b5161c7d5p1d739bjsn7f53417d1c5d',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}


export const Home = () => {
    return (
        <>
            <h1>home</h1>
        </>

    );
}