import Highway from "@dogstudio/highway";
import PageTransition from "./transitions";
import createPortfolio from "./projects";
// import $ from "jquery";

const H = new Highway.Core({
  transitions: {
    default: PageTransition
  }
});

createPortfolio();
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

$(document).ready(function() {
  const protfolioLink = $("nav div ul li")[2];
  protfolioLink.click(() => {
    $(".carousel").slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
});
// document.getElementById("contact-form").addEventListener("submit", e => {
//   submitForm(e);
// });

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
