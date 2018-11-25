import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyAvfDYvx_gN6sARhD6xMTqnVwR2okxoYoM",
  authDomain: "werewolf-a41f0.firebaseapp.com",
  databaseURL: "https://werewolf-a41f0.firebaseio.com",
  projectId: "werewolf-a41f0",
  storageBucket: "werewolf-a41f0.appspot.com",
  messagingSenderId: "731144194285"
};
firebase.initializeApp(config);
export default firebase;
