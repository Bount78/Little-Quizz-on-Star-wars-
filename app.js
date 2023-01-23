const form = document.querySelector('.form-quizz');
let tableauResultat = [];
const reponses = ['b', 'a', 'c', 'a', 'a'];
const emojis = ['🤖', '🌌', '🔫', '👨', '⚔️', '🧑'];
const titreResultat = document.querySelector('.resultat h2');
const texteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];



form.addEventListener('submit', (e) => {
    e.preventDefault();

    for (let i = 1; i < 6; i++) {
        tableauResultat.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    }
    verifFunc(tableauResultat);
    tableauResultat = [];
});

function verifFunc(tabResult) {
    for (let a = 0; a < 5; a++) {
        if (tabResult[a] === reponses[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }
    }

    // console.log(verifTableau);
    affichResultat(verifTableau);
    couleurFunction(verifTableau);
    verifTableau = [];
}


function affichResultat(tabcheck) {
    const nbDeFautes = tabcheck.filter(el => el !== true).length;
    // console.log(nbDeFautes);
    switch (nbDeFautes) {
        case 0:
            titreResultat.innerText = `${emojis[0]}BRAVO ! Tu es un fin fan de Star Wars !${emojis[0]}`;
            aideResultat.innerText = '';
            texteResultat.innerText = '5/5';
            break;
        case 1:
            titreResultat.innerText = `${emojis[1]}Tu es un fin maître JEDI !${emojis[1]}`;
            aideResultat.innerText = 'Rectifie le tir sur les cases en rouges !';
            texteResultat.innerText = '4/5';
            break;
        case 2:
            titreResultat.innerText = `${emojis[2]}Tu dois encore étudier le pouvoir de la Force !${emojis[2]}`;
            aideResultat.innerText = 'Rectifie le tir sur les cases en rouges !';
            texteResultat.innerText = '3/5';
            break;
        case 3:
            titreResultat.innerText = `${emojis[4]}Jeune Padawan il te reste encore beaucoup de travail !${emojis[4]}`;
            aideResultat.innerText = 'Rectifie le tir sur les cases en rouges !';
            texteResultat.innerText = '2/5';
            break;
        case 4:
            titreResultat.innerText = `${emojis[5]}Tu n'entends pas la Force ?${emojis[5]}`;
            aideResultat.innerText = 'Rectifie le tir sur les cases en rouges !';
            texteResultat.innerText = '1/5';
            break;

        default:
            `......Je suis désolé pour toi ${3}${2}${2}`;
            break;
    }
}

function couleurFunction(tabValBool) {
    for (let j = 0; j < tabValBool.length; j++) {
        if (tabValBool[j] === true) {
            toutesLesQuestions[j].style.background = '#71FA34';
        } else {
            toutesLesQuestions[j].style.background = '#EB888B';
            toutesLesQuestions[j].classList.add('echec');
            
            setTimeout(() => {
                toutesLesQuestions[j].classList.remove('echec');
            },500)
        }

    }
}


toutesLesQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = "white";
    })
})