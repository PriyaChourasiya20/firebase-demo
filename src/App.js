import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
// import * as firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  // apiKey: "AIzaSyCoMSnGKVO6mcHCdZFKIa_xyde268L8bmo",
  // authDomain: "fiebase--demo.firebaseapp.com",
  apiKey: "AIzaSyCoMSnGKVO6mcHCdZFKIa_xyde268L8bmo",
  authDomain: "fiebase--demo.firebaseapp.com",
  projectId: "fiebase--demo",
  storageBucket: "fiebase--demo.appspot.com",
  messagingSenderId: "998785761016",
  appId: "1:998785761016:web:58d8bbe36f94e08224c50d",
  measurementId: "G-SBPJSK573S",
});

class App extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default App;
