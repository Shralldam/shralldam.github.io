// Définition de la fonction
function createMsg(name,age,gender) {

	// On crée la variable phrase mais elle est vide pour le moment
	var phrase;

	// Fonction conditionnelle pour vérifier le sexe
	if (gender === "M") {
		phrase = " est un homme de ";
	} else if (gender === "F"){
		phrase = " est une femme de ";
	} else {
		phrase = " est une chose de ";
	}

	// Pour finir, la fonction écrit dans la console le résultat
	console.log(name+phrase+age+" ans.");
}

// Appel de la fonction
createMsg("Damien",42,"M");