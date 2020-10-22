var listHeading = document.querySelector('#list-heading'); // Titre de la liste
var addButton = document.querySelector('#add-btn'); // Bouton d'ajout
var studentList = document.querySelector('#student-list'); // Liste des étudiant·e·s actuelle
var count = 1; // Valeur initiale du compteur pour l'ajout d'étudiant·e·s

/* Méthode pour intercepter l'événement clic
sur un élément de liste, et lancer la fonction
setActive déclarée plus bas */
studentList.addEventListener('click', setActive);

// Définition de la fonction setActive
function setActive(e) {
	// Condition qui vérifie si l'élément cliqué est bien un élément <li>
	if (e.target.nodeName == 'LI') {
		/* Le contenu du titre de la liste (#list-heading)
		changera pour le contenu de l'élément cliqué */
		listHeading.innerHTML = e.target.innerHTML;
		/* Boucle qui vérifie si les autres éléments de liste
		que celui qui a été cliqué possèdent la classe
		.list-group-item-info ; si oui, elle est retirée */
		for (i = 0; i < e.target.parentNode.children.length; i++) {
			e.target.parentNode.children[i].classList.remove('list-group-item-info');
		}
		// Ajoute la classe .list-group-item-info à l'élément cliqué
		e.target.classList.add('list-group-item-info');
	}
}

/* Méthode pour intercepter l'événement clic
sur le bouton d'ajout, et lancer la fonction
addStudent déclarée plus bas */
addButton.addEventListener('click', addStudent);

// Déclaration de la fonction addStudent
function addStudent() {
	// Ajout de code HTML dans la liste #student-list
	studentList.innerHTML += '<li class="list-group-item">Étudiant·e ' + count + '</li>';
	// Incrémentation de count de 1
	count++;
}