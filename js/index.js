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
            arrows: true,
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

const createPortfolio = () => {
  for (let i = 0; i < projects.length; i++) {
    const { title } = projects[i];
    const titleHeader = $("<h4></h4>").text(title);

    const mainRowDiv = $("<div></div>").addClass("row");
    mainRowDiv.append(createProjectInfoDiv(projects[i]));
    mainRowDiv.append(createMockupDiv(projects[i]));

    const outerDiv = $("<div></div>");
    outerDiv.append(titleHeader);
    outerDiv.append(mainRowDiv);
    $(".carousel").append(outerDiv);
  }
};
const createProjectInfoDiv = project => {
  const { skills, description } = project;
  const skillsList = $("<ul></ul>");

  for (let i = 0; i < skills.length; i++) {
    const skillItem = $("<li></li>").text(skills[i]);
    skillsList.append(skillItem);
  }
  const descParagraph = $("<p></p>").text(description);
  const skillsHeader = $("<h5></h5>").text("Skills");
  const infoColDiv = $("<div></div>");
  infoColDiv.attr("class", "col xl6 lg6 m6 left-align project-info");
  infoColDiv.append(descParagraph);
  infoColDiv.append(skillsHeader);
  infoColDiv.append(skillsList);
  infoColDiv.append(createProjectButtonsDiv(project));

  return infoColDiv;
};

const createMockupDiv = project => {
  const { imgSrc } = project;
  const mockupImg = $("<img>")
    .attr("src", imgSrc)
    .addClass("responsive-img");

  const mockupColDiv = $("<div></div>").attr("class", "col xl6 lg6 m6");
  mockupColDiv.append(mockupImg);

  return mockupColDiv;
};

const createProjectButtonsDiv = project => {
  const { repo, demolink } = project;

  const viewCodeBtn = $("<a></a>")
    .attr({
      id: "view-code-btn",
      class: "btn btn-flat waves-effect waves-teal",
      href: repo
    })
    .text("View Code");

  const visitWebsiteBtn = $("<a></a>")
    .attr({
      id: "visit-website-btn",
      class: "btn btn-flat waves-effect waves-teal",
      href: demolink
    })
    .text("Visit Website");

  const btnColLeft = $("<div></div>")
    .attr("class", "col s6")
    .append(viewCodeBtn);
  const btnColRight = $("<div></div>")
    .attr("class", "col s6")
    .append(visitWebsiteBtn);

  const buttonsRowDiv = $("<div></div>").addClass("row");

  buttonsRowDiv.append(btnColLeft);
  buttonsRowDiv.append(btnColRight);

  return $("<div></div>")
    .addClass("container")
    .append(buttonsRowDiv);
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
