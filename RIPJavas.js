/* Main Javascript file for RIPLand */

/******************************/
/*  JAVASCRIPT FOR BIENVENUE  */
/******************************/

const neonBienvenue = document.getElementById("bienvenue");
const neon = document.getElementById("page-neon");
const luminosity = document.querySelector(".page-luminosity");

neonBienvenue.addEventListener("click", function() {

  if (neonBienvenue.classList.contains("neon-bienvenue-on")) {
    neonBienvenue.classList.replace("neon-bienvenue-on", "neon-bienvenue-off");
    neon.classList.replace("neon-on", "neon-off");
    luminosity.classList.remove("page-luminosity-bright");
  }
  else if (neonBienvenue.classList.contains("neon-bienvenue-off")) {
    neonBienvenue.classList.replace("neon-bienvenue-off", "neon-bienvenue-on");
    neon.classList.replace("neon-off", "neon-on");
    luminosity.classList.add("page-luminosity-bright");
  }
})

/****************************/
/*  JAVASCRIPT FOR SHIFUMI  */
/****************************/

var userScore = 0;
var botScore = 0;

document.getElementById('shifumi-box').addEventListener('submit', function(event) {
  event.preventDefault();
  var botChoice = Math.floor(Math.random() * 3);

  if (document.getElementById('pierre__input').checked) {
    document.getElementById('user-choice').innerHTML = "Pierre";
    
    switch ((botChoice + 1) % 3) {
      case 0:
        userScore++;
        document.getElementById('my-choice').innerHTML = "Ciseaux";
        break;
      case 1:
        document.getElementById('my-choice').innerHTML = "Pierre";
        break;
      case 2:
        botScore++;
        document.getElementById('my-choice').innerHTML = "Feuille";
        break
    }
  }
  
  if (document.getElementById('feuille__input').checked) {
    document.getElementById('user-choice').innerHTML = "Feuille";
    
    switch ((botChoice + 1) % 3) {
      case 0:
        botScore++;
        document.getElementById('my-choice').innerHTML = "Ciseaux";
        break;
      case 1:
        userScore++
        document.getElementById('my-choice').innerHTML = "Pierre";
        break;
      case 2:
        document.getElementById('my-choice').innerHTML = "Feuille";
        break;
    }
  }
  
  if (document.getElementById('ciseaux__input').checked) {
    document.getElementById('user-choice').innerHTML = "Ciseaux";
    
    switch ((botChoice + 1) % 3) {
      case 0:
        document.getElementById('my-choice').innerHTML = "Ciseaux";
        break;
      case 1:
        botScore++;
        document.getElementById('my-choice').innerHTML = "Pierre";
        break;
      case 2:
        userScore++;
        document.getElementById('my-choice').innerHTML = "Feuille";
        break;
    }
  }
  document.getElementById('display-user-score').innerHTML = userScore;
  document.getElementById('display-my-score').innerHTML = botScore;
});

/* Déclenchement du slider shifumi */

document.getElementById('shifumi-toggle__input').addEventListener('change', function(event) {
  event.preventDefault();

  if (this.checked) {
    document.getElementById('shifumi').classList.replace('slide-in-left', 'slide-out-left');
  }
  else {
    document.getElementById('shifumi').classList.replace('slide-out-left', 'slide-in-left');
  }
});

/* Déclenchement du slider infinite sword */

document.getElementById('sword-toggle__input').addEventListener('change', function(event) {
  event.preventDefault();

  if (this.checked) {
    document.getElementById('sword-container').classList.replace('slide-in-right', 'slide-out-right');
  }
  else {
    document.getElementById('sword-container').classList.replace('slide-out-right', 'slide-in-right');
  }
});


/***********************************/
/*  JAVASCRIPT FOR INFINITE SWORD  */
/***********************************/

const swordSheath = document.getElementById('sword-container')
const sword = document.getElementById('sword');
const blade = document.getElementById('sword__blade');
const tip = document.getElementById('sword__tip');
var toTheTip = 0;

/* On créé l'observer de nom "observer" */

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      addBlade(entry);
    }
  })
}, {
  rootMargin: "0px 0px 200% 0px"
});

/* Puis on indique l'élément à observer */

observer.observe(blade);

function  addBlade(entry) {
  toTheTip++;
  console.log(toTheTip);

  // On arrête d'observer l'ancienne lame.
  observer.unobserve(entry.target);

  if (toTheTip < 100) {
    // On clone notre lame pour en ajouter une en dessous
    let clonedBlade = blade.cloneNode(true);
    // On ajoute la nouvelle lame à l'épée
    sword.appendChild(clonedBlade);
    // On observe le dernier bout de lame (càd la lame clonée)
    observer.observe(clonedBlade);
  } else {
    let clonedTip = tip.cloneNode(true)
    sword.appendChild(clonedTip);
    clonedTip.classList.remove("hide");
  }
}


/***************************/
/*  JAVASCRIPT FOR SKILLZ  */
/***************************/

const skillz = document.getElementById('skills');

const observerSkillz = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > .25) {
      showSkillz(entry);
    }
    if (entry.intersectionRatio < .25) {
      hideSkillz(entry);
    }
  })
}, {
  threshold: .75
});

observerSkillz.observe(skillz)

function showSkillz(entry) {
  skillz.classList.replace('hide-skillz', 'show-skillz');
}

function hideSkillz(entry) {
  skillz.classList.replace('show-skillz', 'hide-skillz');
}
