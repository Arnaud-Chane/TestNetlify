var activeTab = 0;

// Show and Hide Expériences Pro

var ExpProSectionStyle = document.getElementById("Experiences");
var showExpProSection = document.getElementById("ExpProSection");
var showExpPersoSection = document.getElementById("ExpPersoSection");

function ShowExpPro() {
  if (showExpProSection.style.display === "none" && showExpPersoSection.style.display === "none") {
    showExpProSection.style.display = "block";
    showExpPersoSection.style.display = "block";
    activeTab = 1
  } else if (activeTab != 1){
    showExpProSection.style.display = "none";
    showExpPersoSection.style.display = "none";
  } else {
    showExpProSection.style.display = "none";
    showExpPersoSection.style.display = "none";
  }
}

ExpProSectionStyle.setAttribute("onclick", "ShowExpPro()");

// --




// Show and Hide Compétences 

var competencesSectionStyle = document.getElementById("Competences");
var showListSkillsSection = document.getElementById("listSkills");


function ShowCompetences() {
  if (showListSkillsSection.style.display === "none") {
    showListSkillsSection.style.display = "block";
    activeTab = 2;
  } else if (activeTab != 2) {
    showListSkillsSection.style.display = "none";
  } else {
    showListSkillsSection.style.display = "none";
  }
}

competencesSectionStyle.setAttribute("onclick", "ShowCompetences()");

// --




// Show and Hide A propos de moi 

var aProposSectionStyle = document.getElementById("APropos");
var showAProposDescrSection = document.getElementById("AProposDescr");


function ShowAPropos() {
  if (showAProposDescrSection.style.display === "none") {
    showAProposDescrSection.style.display = "block";
    activeTab = 3;
  } else if (activeTab != 3) {
    showAProposDescrSection.style.display = "none";
  } else {
    showAProposDescrSection.style.display = "none";
  }
}

aProposSectionStyle.setAttribute("onclick", "ShowAPropos()");


// --




// Show and Hide Formations

var formationsSectionStyle = document.getElementById("Formations");
var showListCoursesSection = document.getElementById("listCourses");


function ShowFormations() {
  if (showListCoursesSection.style.display === "none") {
    showListCoursesSection.style.display = "block";
    activeTab = 4;
  } else if (activeTab != 4) {
    showListCoursesSection.style.display = "none";
  } else {
    showListCoursesSection.style.display = "none";
  }
}

formationsSectionStyle.setAttribute("onclick", "ShowFormations()");


// --




// Show and Hide Langues

var languesSectionStyle = document.getElementById("Langues");
var showListLanguesSection = document.getElementById("listLangues");


function ShowLangues() {
  if (showListLanguesSection.style.display === "none") {
    showListLanguesSection.style.display = "block";
    activeTab = 5;
  } else if (activeTab != 5) {
    showListLanguesSection.style.display = "none";
  } else {
    showListLanguesSection.style.display = "none";
  }
}

languesSectionStyle.setAttribute("onclick", "ShowLangues()");


// --