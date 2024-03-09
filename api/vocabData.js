import client from '../utils/client';

// API CALLS FOR VOCAB
const endpoint = client.databaseURL;

// GET Vocab
const getVocab = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// DELETE VOCAB
const deleteVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// CREATE VOCAB
const createVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE VOCAB
const updateVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getVocab, deleteVocab, createVocab, updateVocab, getSingleVocab
};
