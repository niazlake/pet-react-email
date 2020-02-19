import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBVGtyp9EB2rZwem6kGJ7yO3_IfcnKMWDs",
  appId: "1:799373137291:web:b0a2899a5135b6b6254b8e",
  authDomain: "buetify.firebaseapp.com",
  databaseURL: "https://buetify.firebaseio.com",
  messagingSenderId: "799373137291",
  projectId: "buetify",
  storageBucket: "buetify.appspot.com",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.database();
