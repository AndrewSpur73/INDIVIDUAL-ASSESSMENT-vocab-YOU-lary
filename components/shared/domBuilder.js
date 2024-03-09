import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
    <div id="navigation"></div>
    <div id="main-container">
      <div id="filterContainer"></div>
      <div id="formContainer"></div>
      <div id="vocab"></div>
    </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
