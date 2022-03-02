/*01 SI AGE*/
	
var siage

	document.getElementById("button1").addEventListener("click", () => {
	siage = document.getElementById("siage").value;

	if (siage < 18) {
		document.getElementById("divresult1").innerHTML="Erreur !! Ce programme est réservé aux personnes majeures."
	}
	
	else if( siage <= 26) {
		document.getElementById("divresult1").innerHTML="Vous avez le statut JEUNE."
	}
	
	else if( siage <= 65) {
		document.getElementById("divresult1").innerHTML="Vous avez le statut ADULTE."
	}
	
	else {
		document.getElementById("divresult1").innerHTML="Erreur !! Programme réservé aux personnes non-retraitées"
	}

})