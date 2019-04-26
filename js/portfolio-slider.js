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
