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
  const { description } = project;

  const descParagraph = $("<p></p>")
    .text(description)
    .addClass("project-description");
  const skillsHeader = $("<h5></h5>")
    .text("Skills")
    .addClass("yellow-text");
  const infoColDiv = $("<div></div>");
  infoColDiv.attr("class", "col xl6 lg6 m6 left-align project-info");
  infoColDiv.append(descParagraph);
  infoColDiv.append(skillsHeader);
  infoColDiv.append(createSkillsListDiv(project));
  infoColDiv.append(createProjectButtonsDiv(project));

  return infoColDiv;
};

const createSkillsListDiv = project => {
  const { skills } = project;
  const numOfSkills = skills.length;
  const numOfSkillsInLeftCol =
    numOfSkills % 2 == 0 ? numOfSkills / 2 : (numOfSkills + 1) / 2;

  const leftCol = $("<div></div>").attr("class", "col xl6 lg6 m6 s6");
  const rightCol = $("<div></div>").attr("class", "col xl6 lg6 m6 s6");

  const skillsListLeft = $("<ul></ul>");
  const skillsListRight = $("<ul></ul>");

  for (let i = 0; i < numOfSkillsInLeftCol; i++) {
    const skillItem = $("<li></li>").text(skills[i]);
    skillsListLeft.append(skillItem);
  }
  leftCol.append(skillsListLeft);

  for (let i = numOfSkillsInLeftCol; i < numOfSkills; i++) {
    const skillItem = $("<li></li>").text(skills[i]);
    skillsListRight.append(skillItem);
  }
  rightCol.append(skillsListRight);

  const skillsListRow = $("<div></div>").addClass("row");
  skillsListRow.append(leftCol);
  skillsListRow.append(rightCol);

  return skillsListRow;
};

const createMockupDiv = project => {
  const { imgSrc } = project;
  const mockupImg = $("<img>")
    .attr("src", imgSrc)
    .addClass("responsive-img");

  const mockupColDiv = $("<div></div>").attr(
    "class",
    "col xl6 lg6 m6 hide-on-small-only"
  );
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
    .attr("class", "col xl6 lg6 m12 s6 marginBtm")
    .append(viewCodeBtn);
  const btnColRight = $("<div></div>")
    .attr("class", "col xl6 lg6 m12 s6")
    .append(visitWebsiteBtn);

  const buttonsRowDiv = $("<div></div>").addClass("row");

  buttonsRowDiv.append(btnColLeft);
  buttonsRowDiv.append(btnColRight);

  return $("<div></div>")
    .addClass("container")
    .append(buttonsRowDiv);
};
