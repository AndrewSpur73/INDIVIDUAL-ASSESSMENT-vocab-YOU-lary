import { deleteVocab, getVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';

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
  });
};

export default domEvents;
