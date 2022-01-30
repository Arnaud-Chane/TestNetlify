var ExpProSectionStyle = document.getElementById("Experiences");
var showExpProSection = document.getElementById("ExpProSection");
var showExpPersoSection = document.getElementById("ExpPersoSection");

function ShowExpPro() {
  showExpProSection.style.display = "block";
  showExpPersoSection.style.display = "block";
};

ExpProSectionStyle.setAttribute("onclick", "ShowExpPro()");
console.log(ExpProSectionStyle);

