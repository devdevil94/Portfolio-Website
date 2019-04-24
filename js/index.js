import Highway from "@dogstudio/highway";
import PageTransition from "./transitions";

const H = new Highway.Core({
  transitions: {
    default: PageTransition
  }
});

// Initialize Firebase
//  var config = {
//   apiKey: "AIzaSyDejbSdlutY0ZJAj6cl6f2KET68qUkPOiY",
//   authDomain: "portfolio-contact-form-8a905.firebaseapp.com",
//   databaseURL: "https://portfolio-contact-form-8a905.firebaseio.com",
//   projectId: "portfolio-contact-form-8a905",
//   storageBucket: "portfolio-contact-form-8a905.appspot.com",
//   messagingSenderId: "932210990533"
// };
// firebase.initializeApp(config);

document.getElementById("contact-form").addEventListener("submit", e => {
  submitForm(e);
});

const submitForm = e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  console.log(name);
  console.log(email);
  console.log(message);
};
