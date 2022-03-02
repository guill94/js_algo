/*07 HYPO*/

var a
var b
var h

document.getElementById("cotehypo").checked=true;

document.getElementById("cotehypo").addEventListener ("click", () => {
	document.getElementById("divhypo").style.display="block";
	document.getElementById("divautre").style.display="none";
})
document.getElementById("coteautre").addEventListener ("click", () => {
	document.getElementById("divhypo").style.display="none";
	document.getElementById("divautre").style.display="block";
})

document.getElementById("button1").addEventListener ("click", () => {
	a = document.getElementById("cote1").value;
	b = document.getElementById("cote2").value;
	h = Math.sqrt(a*a+b*b);
	document.getElementById("divresult0").innerHTML="La longueur de l'hypoténuse est :"+" "+h
	document.getElementById("hideshow").style.display="block";
})

document.getElementById("button2").addEventListener ("click", () => {
	h = document.getElementById("cote1a").value;
	b = document.getElementById("cote2a").value;
	a = Math.sqrt(h*h-b*b);
	document.getElementById("divresult1").style.display="block";
	document.getElementById("divresult1").innerHTML="La longueur du côté inconnu est :"+" "+a
	document.getElementById("hideshow2").style.display="block";
})

document.getElementById("button3").addEventListener("click", () => {
	document.location.reload();
	document.getElementById("cote1").value="";
	document.getElementById("cote2").value="" ;
})

document.getElementById("button4").addEventListener("click", () => {
	document.getElementById("hideshow2").style.display="none";
	document.getElementById("divresult1").style.display="none";
	document.getElementById("cote1a").value="";
	document.getElementById("cote2a").value="" ;
})
/*https://www.javascripttutorial.net/javascript-dom/javascript-createelement/*/