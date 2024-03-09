import { getVocab } from '../api/vocabData';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';
import showVocab from '../pages/vocab';

const startApp = (uid) => {
  domBuilder(); // BUILD THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  domEvents(uid); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(uid); // ADD FORM EVENT LISTENTERS TO THE DOM
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navEvents(uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // Put all vocab on the DOM on App load
  getVocab(uid).then((vocab) => showVocab(vocab, uid));
};

export default startApp;
