var activeTab = 0;

function callSwitch() {
  switch (activeTab) {
    case 1 :
      ShowExpPro();
      showListSkillsSection.style.display = "none";
      showAProposDescrSection.style.display = "none";
      showListCoursesSection.style.display = "none";
      showListLanguesSection.style.display = "none";
      break;
    case 2 :
      ShowCompetences();
      showExpProSection.style.display = "none";
      showExpPersoSection.style.display = "none";
      showAProposDescrSection.style.display = "none";
      showListCoursesSection.style.display = "none";
      showListLanguesSection.style.display = "none";
      break;
    case 3 :
      ShowAPropos();
      showExpProSection.style.display = "none";
      showExpPersoSection.style.display = "none";
      showListSkillsSection.style.display = "none";
      showListCoursesSection.style.display = "none";
      showListLanguesSection.style.display = "none";
      break;
    case 4 :
      ShowFormations();
      showExpProSection.style.display = "none";
      showExpPersoSection.style.display = "none";
      showListSkillsSection.style.display = "none";
      showAProposDescrSection.style.display = "none";
      showListLanguesSection.style.display = "none";
      break;
    case 5 :
      showLangues();
      showExpProSection.style.display = "none";
      showExpPersoSection.style.display = "none";
      showListSkillsSection.style.display = "none";
      showAProposDescrSection.style.display = "none";
      showListCoursesSection.style.display = "none";
      break;
  }
}

// --
// Show and Hide Expériences Pro

var ExpProSectionStyle = document.getElementById("Experiences");
var showExpProSection = document.getElementById("ExpProSection");
var showExpPersoSection = document.getElementById("ExpPersoSection");

function breakShowExpPro() {
  activeTab = 1;
  callSwitch();
}
function ShowExpPro() {
  if (showExpProSection.style.display === "none" && showExpPersoSection.style.display === "none") {
    showExpProSection.style.display = "block";
    showExpPersoSection.style.display = "block";
  } else {
    showExpProSection.style.display = "none";
    showExpPersoSection.style.display = "none";
  }
}

ExpProSectionStyle.setAttribute("onclick", "breakShowExpPro()");


// --
// Show and Hide Compétences 

var competencesSectionStyle = document.getElementById("Competences");
var showListSkillsSection = document.getElementById("listSkills");

function breakShowCompetences() {
  activeTab = 2;
  callSwitch();
}

function ShowCompetences() {
  if (showListSkillsSection.style.display === "none") {
    showListSkillsSection.style.display = "block";
  } else {
    showListSkillsSection.style.display = "none";
  }
}

competencesSectionStyle.setAttribute("onclick", "breakShowCompetences()");


// --
// Show and Hide A propos de moi 

var aProposSectionStyle = document.getElementById("APropos");
var showAProposDescrSection = document.getElementById("AProposDescr");

function breakShowAPropos() {
  activeTab = 3;
  callSwitch();
}

function ShowAPropos() {
  if (showAProposDescrSection.style.display === "none") {
    showAProposDescrSection.style.display = "block";
  } else {
    showAProposDescrSection.style.display = "none";
  }
}

aProposSectionStyle.setAttribute("onclick", "breakShowAPropos()");


// --
// Show and Hide Formations

var formationsSectionStyle = document.getElementById("Formations");
var showListCoursesSection = document.getElementById("listCourses");

function breakShowFormations() {
  activeTab = 4;
  callSwitch();
}


function ShowFormations() {
  if (showListCoursesSection.style.display === "none") {
    showListCoursesSection.style.display = "block";
  } else {
    showListCoursesSection.style.display = "none";
  }
}

formationsSectionStyle.setAttribute("onclick", "breakShowFormations()");


// --
// Show and Hide Langues

var languesSectionStyle = document.getElementById("Langues");
var showListLanguesSection = document.getElementById("listLangues");

function breakShowLangues() {
  activeTab = 5;
  callSwitch();
}

function showLangues() {
  if (showListLanguesSection.style.display === "none") {
    showListLanguesSection.style.display = "block";
  } else {
    showListLanguesSection.style.display = "none";
  }
}

languesSectionStyle.setAttribute("onclick", "breakShowLangues()");

