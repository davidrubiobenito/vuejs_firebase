// Initialize Firebase
var config = {
    apiKey: "AIzaSyBPhrqnO0cDdsnZndA9IYtpRhvesuFp0-s",
    authDomain: "curso-vue-firebase-57373.firebaseapp.com",
    databaseURL: "https://curso-vue-firebase-57373.firebaseio.com",
    projectId: "curso-vue-firebase-57373",
    storageBucket: "curso-vue-firebase-57373.appspot.com",
    messagingSenderId: "296786769631"
};
firebase.initializeApp(config);

// Guardar una referencia a la base de datos
var db = firebase.database();