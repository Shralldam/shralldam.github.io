var verbs = [
	" découpe ",
	" renifle ",
	" malaxe ",
	" mange ",
	" lobotomise ",
	" tartine ",
	" examine ",
	" décape ",
	" giffle ",
	" lèche "
];

var subjects = [
	"un hamster",
	"deux poulpes",
	"un tractopelle",
	"des tortellini",
	"un député",
	"une gendarmette",
	"Donald Trump",
	"Jar-Jar Binks",
	"un string léopard",
	"un bus"
];

var how = [
	"pernicieusement ",
	"avec délicatesse ",
	"sans broncher ",
	"à l'aide d'une tronçonneuse ",
	"complètement bourré ",
	"avec du sopalin ",
	"méthodiquement ",
	"depuis l'espace ",
	"sur une piste de ski ",
	"sans les mains "
];

var end = [
	" accompagné de vingt macaques enragés.",
	" sapé comme jamais.",
	" et c'est chaud-boulette.",
	" dans une impunité totale.",
	" enfermé dans les toilettes.",
	" malgré une gastro carabinée.",
	" au journal de Jean-Pierre Pernaud.",
	" depuis la naissance.",
	" en Patagonie.",
	" sauf si le contraire est faux."
];

function createMsg(name) {
	var min = Math.ceil(0),
	max = Math.floor(10),
	v = Math.floor(Math.random()*(max-min))+min,
	h = Math.floor(Math.random()*(max-min))+min,
	s = Math.floor(Math.random()*(max-min))+min,
	e = Math.floor(Math.random()*(max-min))+min;
	return name + verbs[v] + how[h] + subjects[s] + end[e];
}

console.log(createMsg("Gaspard"));
