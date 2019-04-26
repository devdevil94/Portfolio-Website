// Initialize Firebase
var config = {
  apiKey: "AIzaSyDejbSdlutY0ZJAj6cl6f2KET68qUkPOiY",
  authDomain: "portfolio-contact-form-8a905.firebaseapp.com",
  databaseURL: "https://portfolio-contact-form-8a905.firebaseio.com",
  projectId: "portfolio-contact-form-8a905",
  storageBucket: "portfolio-contact-form-8a905.appspot.com",
  messagingSenderId: "932210990533"
};
// firebase.initializeApp(config);

// const messagesRef = firebase.database().ref("messages");

$(document).ready(function() {
  let portfolioCreated = false;

  const navLinks = $("#nav-links li a");

  navLinks.click(e => {
    $("#nav-links")
      .find("li.active")
      .removeClass("active");
    $(e.target)
      .parent("li")
      .addClass("active");

    const page = $(e.target).text();

    switch (page) {
      case "HOME":
        $("#home").removeClass("hide");
        $("#home")
          .siblings("section")
          .addClass("hide");
        break;

      case "ABOUT":
        $("#about").removeClass("hide");
        $("#about")
          .siblings("section")
          .addClass("hide");
        $("#about").fadeIn(1000);
        break;

      case "PORTFOLIO":
        $("#portfolio").removeClass("hide");
        $("#portfolio")
          .siblings("section")
          .addClass("hide");

        if (!portfolioCreated) {
          createPortfolio();
          $(".carousel").slick({
            dots: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          });

          portfolioCreated = true;
        }
        break;
      case "CONTACT":
        $("#contact").removeClass("hide");
        $("#contact")
          .siblings("section")
          .addClass("hide");

        break;
    }
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
