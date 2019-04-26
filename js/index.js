// import Highway from "@dogstudio/highway";
// import PageTransition from "./transitions";
// import createPortfolio from "./projects";

// const H = new Highway.Core({
//   transitions: {
//     default: PageTransition
//   }
// });

// createPortfolio();

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
  const { title } = projects[0];
  const titleHeader = $("<h4></h4>").text(title);

  const mainRowDiv = $("<div></div>");
  mainRowDiv.addClass("row");
  mainRowDiv.append(createProjectInfoSection());

  const outerDiv = $("<div></div>");
  outerDiv.append(titleHeader);
  outerDiv.append(mainRowDiv);
  $(".carousel").append(outerDiv);

  $(".carousel").slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});

const createProjectInfoSection = () => {
  const { skills, description } = projects[0];
  const skillsList = $("<ul></ul>");

  for (let i = 0; i < skills.length; i++) {
    const skillItem = $("<li></li>").text(skills[i]);
    skillsList.append(skillItem);
  }
  const descParagraph = $("<p></p>").text(description);
  const skillsHeader = $("<h5></h5>").text("Skills");
  const infoColDiv = $("<div></div>");
  infoColDiv.attr("class", "col xl6 lg6 left-align project-info");
  infoColDiv.append(descParagraph);
  infoColDiv.append(skillsHeader);
  infoColDiv.append(skillsList);

  return infoColDiv;
};

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
