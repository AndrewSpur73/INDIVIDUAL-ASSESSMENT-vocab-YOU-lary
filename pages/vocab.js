import { getLanguage } from '../api/languageData';
import clearDom from '../utils/clearDom';
// import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const showVocab = async (array) => {
  clearDom();
  console.warn(array);
  const filterString = `
    <div class="d-flex flex-wrap justify-content-between my-3">
      <button class="btn all btn-lg buttonRow" id="allFilter">All</button>
      <button class="btn html btn-lg buttonRow" id="htmlFilter">HTML</button>
      <button class="btn css btn-lg buttonRow" id="cssFilter">CSS</button>
      <button class="btn js btn-lg buttonRow" id="jsFilter">JavaScript</button>
    </div>
    `;
  renderToDOM('#filterContainer', filterString);

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

export default showVocab;
