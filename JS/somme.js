/*02 SOMME*/

var inombre;
var nbre=0;
var somme=0;
var max=0;
var min=0;
var moyenne=0;
var longueur
var i;


	function sommer () {	

	if (inombre < min) {
		min = inombre;
	}
	else if (inombre > max) {
		max = inombre;
	}
	
	somme = parseInt(somme) + parseInt(inombre);
	moyenne = Number(somme) / Number(nbre);
	}
	
document.getElementById("button2").addEventListener("click", () => {
	inombre = document.getElementById("somme").value;

	if (inombre !== 0) {
		if (nbre==0) {
			max=parseInt(inombre);
			min=parseInt(inombre);
			
		}
		
		nbre=nbre+1;
		sommer ();
		document.getElementById("divresult1").innerHTML= "Vous avez entré "+" "+inombre;
		document.getElementById("somme").value="";
	}
})
	document.getElementById("button3").addEventListener("click", () => {
		document.getElementById("divresult1").innerHTML= "Vous avez entré "+" "+nbre +" "+ "nombres, compris entre" +" "+ min + " " + "et" + " " +max+". ";
		document.getElementById("divresult2").innerHTML= "La somme est :"+" "+somme+". "+" La moyenne est :"+" "+moyenne+".";
		document.getElementById("hideshow").style.display="block";
	
})

document.getElementById("button4").addEventListener("click", () => {
	document.location.reload();
	document.getElementById("somme").value="";
})
	