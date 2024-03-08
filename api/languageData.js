import client from '../utils/client';

// API CALLS FOR LANGUAGE
const endpoint = client.databaseURL;

// GET LANGUAGE
const getLanguage = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/language.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export default getLanguage;
