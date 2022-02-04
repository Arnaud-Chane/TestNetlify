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
