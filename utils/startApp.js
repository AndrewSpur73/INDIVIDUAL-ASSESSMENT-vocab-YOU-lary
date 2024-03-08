import { getVocab } from '../api/vocabData';
// import filterButtons from '../components/buttons/filterButtons';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';
import showVocab from '../pages/vocab';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  // filterButtons(); // Filter Buttons

  // Put all vocab on the DOM on App load
  getVocab().then((vocab) => showVocab(vocab));
};

export default startApp;
