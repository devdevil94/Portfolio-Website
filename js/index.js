import Highway from "@dogstudio/highway";
import PageTransition from "./transitions";

const H = new Highway.Core({
  transitions: {
    default: PageTransition
  }
});

const navLinks = document.querySelectorAll("nav div ul li");
console.log(document);
// navLinks.forEach(link => {
//   deactivateLinks();
//   link.classList.add("active");
// });

// function deactivateLinks() {
//   navLinks.forEach(link => {
//     if (link.classList.contains("active")) {
//       link.classList.remove("active");
//     }
//   });
// }

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDejbSdlutY0ZJAj6cl6f2KET68qUkPOiY",
  authDomain: "portfolio-contact-form-8a905.firebaseapp.com",
  databaseURL: "https://portfolio-contact-form-8a905.firebaseio.com",
  projectId: "portfolio-contact-form-8a905",
  storageBucket: "portfolio-contact-form-8a905.appspot.com",
  messagingSenderId: "932210990533"
};
firebase.initializeApp(config);

const messagesRef = firebase.database().ref("messages");

document.getElementById("contact-form").addEventListener("submit", e => {
  submitForm(e);
});

const submitForm = e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  saveMessage(name, email, message);

  setTimeout(() => {
    document.getElementById("contact-form").reset();
  }, 1000);

  M.toast({ html: "Your message has been sent", displayLength: 2500 });
};

const saveMessage = (name, email, message) => {
  let newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  });
};
