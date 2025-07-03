/*
TODO APP mini challenge 

Objectifs :

    Ajouter une nouvelle tâche quand on clique sur "Ajouter"
    Marquer une tâche comme terminée quand on clique dessus
    Supprimer une tâche avec le bouton Supprimer
    Bonus : Mettre à jour le compteur de tâches

Structure d'une tâche

<li class="tache">
    <span class="texte-tache">Ma tâche</span>
    <button class="btn-supprimer">Supprimer</button>
</li>
*/

compteurDeTache=0
const btnAjouter = document.querySelector('#btn-ajouter-tache')
const nvelleTache = document.querySelector('#nouvelle-tache')
const ulTache = document.querySelector('#liste-taches')

//Ajouter une nouvelle tâche quand on clique sur "Ajouter"
function ajoutTache(){
    const tache = document.createElement('li')    
    tache.className = 'tache'
    const texteTache = document.createElement('span')
    const btnSupprimer = document.createElement('button')
    texteTache.classList = 'texte_tache'
    btnSupprimer.className = 'btn-supprimer'
    btnSupprimer.innerText = 'Supprimer'

    texteTache.innerText = nvelleTache.value + " "

    tache.appendChild(texteTache)
    tache.appendChild(btnSupprimer)
    ulTache.appendChild(tache)

    optionTerminerTache()
    supprimerTache()
    compteTache()
    effacerInputTache()
}

btnAjouter.addEventListener('click', ajoutTache)

//Marquer une tâche comme terminé quand on clique dessus
function optionTerminerTache() {
    let ensembleDesTaches = document.querySelectorAll('span')
    ensembleDesTaches.forEach(element => {
        element.addEventListener('click', (event) => {
            event.target.style.textDecoration = 'line-through'
        })
    })
}

//Supprimer une tache avec le bouton supprimer
function supprimerTache() {
    const btnSupprimer = document.querySelectorAll('.btn-supprimer')
    btnSupprimer.forEach(element => {
        element.addEventListener("click", (event) => {
            event.target.closest('li').remove()
            compteurDeTache--
            nombreTache.innerText = `${compteurDeTache} tâche(s)`
        })
    })
}

//Bonus : Mettre à jour le compteur de tâches
let nombreTache = document.getElementById('nombre-taches')

function compteTache(){
    compteurDeTache++
    nombreTache.innerText = `${compteurDeTache} tâche(s)`
}

function effacerInputTache(){
    nvelleTache.value = ''
}