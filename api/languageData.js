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

const getSingleLanguage = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/language/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export { getLanguage, getSingleLanguage };
