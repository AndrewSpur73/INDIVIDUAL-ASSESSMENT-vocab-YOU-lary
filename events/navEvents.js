import { getVocab } from '../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';
import showVocab from '../pages/vocab';
import { signOut } from '../utils/auth';

// navigation events
const navEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
  // ALL VOCAB
  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab(uid).then((vocab) => showVocab(vocab, uid));
  });
  // CREATE VOCAB BUTTON
  document.querySelector('#add-vocab-btn').addEventListener('click', () => {
    addVocabForm(uid);
  });
};

export default navEvents;
