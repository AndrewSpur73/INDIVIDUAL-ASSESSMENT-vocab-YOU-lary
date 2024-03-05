import firebase from 'firebase/app';
import 'firebase/auth';
import client from './client';
import logoutButton from '../components/buttons/logoutButton';
import loginButton from '../components/buttons/loginButton';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      logoutButton(user.uid);
    } else {
      // person is NOT logged in
      loginButton();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
