import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCAxX-DfTDpcZRBgtS9Ot8MSTDffbSptSo",
    authDomain: "yuma-portfolio.firebaseapp.com",
    databaseURL: "https://yuma-portfolio.firebaseio.com",
    projectId: "yuma-portfolio",
    storageBucket: "yuma-portfolio.appspot.com",
    messagingSenderId: "153591753405"
  })
}

export default firebase
