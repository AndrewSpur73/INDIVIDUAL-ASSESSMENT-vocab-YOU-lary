import { deleteVocab, getSingleVocab, getVocab } from '../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';
import showVocab from '../pages/vocab';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
  // CLICK EVENT FOR DELETING VOCAB
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      const [, firebaseKey] = e.target.id.split('--');

      deleteVocab(firebaseKey).then(() => {
        getVocab().then(showVocab);
      });
    }
    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(vocabObj));
    }
  });
};

export default domEvents;
