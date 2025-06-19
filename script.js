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

//Ajouter une nouvelle tâche quand on clique sur "Ajouter"
const btnAjouter = document.querySelector('#btn-ajouter-tache')

function ajoutTache(){
    const nvelleTache = document.querySelector('#nouvelle-tache')
    const ulTache = document.querySelector('#liste-taches')

    const tache = document.createElement('li')    
    const texteTache = document.createElement('span')
    const btnSupprimer = document.createElement('button')

    texteTache.innerText = nvelleTache.value

    tache.appendChild(texteTache)
    tache.appendChild(btnSupprimer)
    ulTache.appendChild(tache)
}

btnAjouter.addEventListener('click', ajoutTache)