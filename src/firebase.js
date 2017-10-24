import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBsysy2hnvucMVD12iZpgX5quY0vTiMitw",
    authDomain: "goalcoach-e4ff4.firebaseapp.com",
    databaseURL: "https://goalcoach-e4ff4.firebaseio.com",
    projectId: "goalcoach-e4ff4",
    storageBucket: "",
    messagingSenderId: "445010481240"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');