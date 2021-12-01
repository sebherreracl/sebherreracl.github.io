// SHOW MENU HIDDEN //
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
// MENU SHOW //
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
// MENU CLOSE //
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
// REMOVE MENU MOBILE //
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  // When we click on each nav__link, we remove the show -menu class //
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// LOGIC GAME //
const logicGame = document.getElementById("logic-game"),
  logicButton = document.getElementById("logic-button"),
  displayMain = document.getElementById("main");
consoleLog = document.getElementById("logic-consolelog");
retouner = document.getElementById('logic-retourner')
demarrer = document.getElementById('logic-demarrer')
footer = document.getElementById('footer')

function getValue() {
  let userValue;
  userValue = document.getElementById("input-user").value;
  console.log(userValue);
}
let choix

logicButton.addEventListener("click", function () {
  logicGame.style.display = "flex";
  displayMain.classList.add("display");
  footer.classList.add('display');
  consoleLog.innerHTML +=
    '<div class="text__block" id="text-block"><p>Choisissez votre niveau:</p></div>';
  consoleLog.innerHTML +=
    '<div class="text__block" id="text-block"><p>1 = facile : entre 1 et 10</p></div>';
  consoleLog.innerHTML +=
    '<div class="text__block" id="text-block"><p>2 = moyen : entre 1 et 100</p></div>';
  consoleLog.innerHTML +=
    '<div class="text__block" id="text-block"><p>3 = difficile : entre 1 et 1000</p></div>';

});


function displayAll() {
    logicGame.style.display = "none";
    displayMain.classList.remove("display")
    footer.classList.remove('display');
}

function game() {
    var choix, justePrix, prop, i, max;
    var niveau;
    var choix2;
   
    do {
        i = 0;
        window.alert("Choisissez votre niveau:");
        window.alert("1 = facile : entre 1 et 10");
        window.alert("2 = moyen : entre 1 et 100");
        window.alert("3 = difficile : entre 1 et 1000");
        choix = window.prompt('Enter a value for choix');
        while (choix < 1 || choix > 3) {
            window.alert("Erreur : niveau inconnu ! Entrez un nombre entre 1 et 3");
            choix = window.prompt('Enter a value for choix');
        }
        if (choix == 1) {
            justePrix = Math.floor(Math.random() * 10) + 1;
            niveau = "facile";
            max = 10;
        } else {
            if (choix == 2) {
                justePrix = Math.floor(Math.random() * 100) + 1;
                niveau = "moyen";
                max = 100;
            } else {
                if (choix == 3) {
                    justePrix = Math.floor(Math.random() * 1000) + 1;
                    niveau = "difficile";
                    max = 1000;
                }
            }
        }
        window.alert("Niveau " + niveau);
        do {
            window.alert("Entrez la proposition");
            prop = window.prompt('Enter a value for prop');
            while (prop < 1 || prop > max) {
                window.alert("Erreur : la proposition n'est pas entre les bornes 1 et " + max);
                prop = window.prompt('Enter a value for prop');
            }
            i = i + 1;
            if (justePrix != prop) {
                if (justePrix > prop) {
                    window.alert("C'est plus");
                } else {
                    window.alert("C'est moins");
                }
            }
        } while (i != 10 && justePrix != prop);
        if (justePrix == prop) {
            window.alert("C'est gagné en " + i + " tentative(s)");
        } else {
            window.alert("C'est perdu, le juste prix était " + justePrix);
        }
        window.alert("Voulez-vous rejouer ? true/false ");
        choix2 = window.prompt('Enter a value for choix2');
    } while (choix2 == true);
    window.alert("Merci au revoir");
}

// kanye west //
const kanyeWest = document.getElementById('kanye-west'),
      kanyeWestButton = document.getElementById('kanye-west-button')

kanyeWestButton.addEventListener("click", function () {
    kanyeWest.style.display = "flex";
    displayMain.classList.add("display");
    footer.classList.add('display')
  });

let citation = document.getElementById("citation")
let citationNew = document.getElementById("citationNew")


window.addEventListener('load', () => {
    fetch("https://api.kanye.rest/")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        citation.innerText = data.quote
    })
})

citationNew.addEventListener('click', () => {
    fetch("https://api.kanye.rest/")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        citation.innerText = data.quote
    })
})

function displayAll2() {
    kanyeWest.style.display = "none";
    displayMain.classList.remove("display")
    footer.classList.remove('display')
}
