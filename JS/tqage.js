/*03 TQ AGE*/
	
var siage

	document.getElementById("button1").addEventListener("click", () => {
	siage = document.getElementById("siage").value;

	if (siage < 18) {
		document.getElementById("divresult1").innerHTML="Erreur !! Ce programme est réservé aux personnes majeures."
		document.getElementById("hideshow").style.display="block";
	}
	
	else if( siage <= 26) {
		document.getElementById("divresult1").innerHTML="Vous avez le statut JEUNE."
		document.getElementById("hideshow").style.display="block";
	}
	
	else if( siage <= 65) {
		document.getElementById("divresult1").innerHTML="Vous avez le statut ADULTE."
		document.getElementById("hideshow").style.display="block";
	}
	
	else {
		document.getElementById("divresult1").innerHTML="Erreur !! Programme réservé aux personnes non-retraitées"
		document.getElementById("hideshow").style.display="block";
	}

})

document.getElementById("button3").addEventListener("click", () => {
	document.location.reload();
	document.getElementById("siage").value="";
})