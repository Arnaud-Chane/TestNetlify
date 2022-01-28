/*
<div id="ExpPro">
    <div class="ExpProTitle">Technicien Support Helpdesk</div>
    <div class="ExpProEntreprise">Mesoigner</div>
    <div class="ExpProDate">Decembre 2020 - Aujourd'hui</div>
    <div class="ExpProLocation">Bordeaux - FRANCE</div>  
    <div class="ExpProTasks">
    <ul>
        <li>Gérer le flux des appels entrants et sortants</li>
        <li>Former les professionnels de santé à distance (3heures / session)</li>
        <li>Faire une veille des dossiers et de la visibilité en ligne des pharmacies (référencement)</li>
        <li>Planifier des rendez-vous de formation ou de suivi-dossiers</li>
        <li>Conseiller et vendre des produits et options de fonctionnalité</li>
        <li>Gestion de stocks et creation de fiches produits (E-Commerce)</li>
        <li>Maîtriser les logiciels :</li>
        <div class="ExpProApp">
        <ul>
            <li>3CX</li>
            <li>TeamViewer</li>
            <li>Anydesk</li>
            <li>Google My Business</li>
            <li>Google Agenda</li>
            <li>SIDEP</li>
            <li>AMELI PRO</li>
            <li>Slack</li>
            <li>Trello</li>
            <li>PowerPoint</li>
            <li>ThunderBirds</li>
            <li>Outlook</li>
        </ul>
        </div> 
    </ul>
    </div>
</div>

<div id="ExpPro">
    <div class="ExpProTitle">Conseiller Support Technique CRC</div>
    <div class="ExpProEntreprise">Sogetrel</div>
    <div class="ExpProDate">Février 2020 - Décembre 2020</div>
    <div class="ExpProLocation">Nancy - FRANCE</div>  
    <div class="ExpProTasks">
    <ul>
        <li>Répondre aux problèmes techniques rencontrés par les agents lors de la pose de fibre pour les particuliers sur le terrain</li>
        <li>Assister les techniciens pour la prise de mesure TCO</li>
        <li>Installer le materiel informatique (ordinateurs, câblage et logiciels) sur le plateau</li>
        <li>Maîtriser les logiciels :</li>
        <div class="ExpProApp">
        <ul>
            <li>Citrix</li>
            <li>ASTEA</li>
            <li>ALF</li>
            <li>U2000</li>
            <li>AMS</li>
            <li>FastFiber</li>
        </ul>
        </div>
    </ul>
</div>


<div id="ExpPro">
    <div class="ExpProTitle">Opérateur Pôle Sécurité des Tiers</div>
    <div class="ExpProEntreprise">Enedis (Ex-ERDF)</div>
    <div class="ExpProDate">Janvier 2019 - Novembre 2019</div>
    <div class="ExpProLocation">Lyon - FRANCE</div>  
    <div class="ExpProTasks">
    <ul>
        <li>Traiter les dossiers clients dans les délais impartis</li>
        <li>Coordonner les actions entre les divers services</li>
        <li>Répondre aux appels téléphoniques</li>
        <li>Former les nouveaux arrivants</li>
        <li>Maîtriser les logiciels :</li>
            <div class="ExpProApp">
            <ul>
                <li>Protys</li>
                <li>Caraïbe FIXE</li>
                <li>Sytral</li>
                <li>Outlook</li>
                <li>Eplans</li>
            </ul>
            </div> 
    </ul>
    </div>
</div>





// Expérience Pro

var innerExpProArea = document.getElementById("ExpPro");
innerExpProArea.setAttribute("onclick", "addInnerToExpPro()");
console.log(innerExpProArea);

function addInnerToExpPro(){
  var divInnerExpPro = document.createElement("div");
  divInnerExpPro.innerHTML  = document.getElementById("ExpProInner").innerHTML;
  document.getElementById("rightAfterExpPro").appendChild(divInnerExpPro);
};


*/
var ExpProSectionStyle = document.getElementById("Experiences");
var ExperiencesId = ExpProSectionStyle.id;

function ShowExpPro() {
  var emptyDiv = document.createElement("div");
  emptyDiv.innerHTML = "";
  document.ExperiencesID.appendChild(emptyDiv);

  var showExpProSection = document.getElementById("ExpProSection");
  showExpProSection.style.visibility = "visible";
  showExpProSection.style.display = "inline";
};





ExpProSectionStyle.setAttribute("onclick", "ShowExpPro()");
console.log(ExpProSectionStyle);












