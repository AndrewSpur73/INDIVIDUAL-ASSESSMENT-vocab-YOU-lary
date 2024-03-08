// import clearDom from '../utils/clearDom';
import getLanguage from '../api/languageData';
import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Vocab</h1>';
  renderToDOM('#vocab', domString);
};

const showVocab = async (array) => {
  let domString = '';
  const languages = await getLanguage();
  array.forEach((item) => {
    const singleLanguage = languages.find((lang) => lang.firebaseKey === item.language_id);
    domString += `
    <div class="card">
    <div class="card-body" style="width: 18rem;">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${singleLanguage.language}</p>
      <p class="card-text">${item.definition}</p>
      <i id="edit-book-btn--${item.firebaseKey}" class="btn btn-info"><span id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit"></span></i>
      <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger"><span id="delete-vocab-btn--${item.firebaseKey}" class="fas fa-trash-alt"></span></i>
    </div>
  </div>`;
  });
  renderToDOM('#vocab', domString);
};

export { showVocab, emptyVocab };
