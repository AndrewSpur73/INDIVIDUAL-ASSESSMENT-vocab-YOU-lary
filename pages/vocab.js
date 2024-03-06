import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Vocab</h1>';
  renderToDOM('#vocab', domString);
};

const showVocab = (array, clear = true) => {
  if (clear) {
    clearDom();
    const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-vocab-btn">Add Vocab</button>';
    renderToDOM('#add-button', btnString);
  }

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card">
    <div class="card-body" style="width: 18rem;">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.language_id}</p>
      <p class="card-text">${item.definition}</p>
      <i id="edit-book-btn--${item.firebaseKey}" class="btn btn-info"><span id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit"></span></i>
      <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger"><span id="delete-vocab-btn--${item.firebaseKey}" class="fas fa-trash-alt"></span></i>
    </div>
  </div>`;
  });
  renderToDOM('#vocab', domString);
};

export { showVocab, emptyVocab };
