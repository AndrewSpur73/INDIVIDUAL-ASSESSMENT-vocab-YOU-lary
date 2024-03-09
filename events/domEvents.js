import { deleteVocab, getSingleVocab, getVocab } from '../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';
import showVocab from '../pages/vocab';
import vocabFilter from '../pages/vocabFilter';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
  // CLICK EVENT FOR DELETING VOCAB
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      const [, firebaseKey] = e.target.id.split('--');

      deleteVocab(firebaseKey).then(() => {
        getVocab(uid).then((vocab) => showVocab(vocab, uid));
      });
    }
    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(vocabObj));
    }
    if (e.target.id.includes('htmlFilter')) {
      vocabFilter(uid, '-Ns-fIupGxQpuudOL4H6');
    }
    if (e.target.id.includes('cssFilter')) {
      vocabFilter(uid, '-Ns-fIuqpHMA4NGJnX3t');
    }
    if (e.target.id.includes('jsFilter')) {
      vocabFilter(uid, '-Ns-fIuobn5SDI06iqO0');
    }
    if (e.target.id.includes('allFilter')) {
      getVocab(uid).then((vocab) => showVocab(vocab, uid));
    }
  });
};

export default domEvents;
