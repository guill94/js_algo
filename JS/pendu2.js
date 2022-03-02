var essai=10
var nbreLettre=0
var nbreEssai=0
var motSecret
var motDevine
var lettreEntree
var lettreExtr
var indice
var longueur=0
var i
var imageact



/*FONCTIONS*/

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;     
    return str.substr(0,index) + chr + str.substr(index+1);                            /*Remplace lettre par une autre dans mot*/
}

function askmot() {
          
               motSecret = prompt("Entrez le mot Secret (entre 3 et 8 lettres) :");   /*Affiche Boîte dial pour entrer mot secret (Si 1ere entrée fausse)*/
        
}

/*ACTIONS POUR JOUEUR 1*/

document.getElementById("buttonsecret").addEventListener("click", () => {

			motSecret=document.getElementById("mot_secret").value;                                                /*Affecte le mot entré à motSecret*/
			longueur = motSecret.length;                                                                          /*Affecte à longueur la longueur de mot_secret*/
			
			
			if (longueur > 8 || longueur < 3) {                                                                /*Vérifie la longueur de motSecret*/
				 if (longueur > 8) {
					document.getElementById("statut").innerHTML = "Attention : Veuillez entrer un mot de 8 lettres au maximum"
					document.getElementById("mot_secret").value="";
				}
				else if (longueur < 3) {
					document.getElementById("statut").innerHTML = "Attention : Veuillez entrer un mot de 3 lettres au minimum"
					document.getElementById("mot_secret").value="";
				}
			}
				else {
					document.getElementById("statut").innerHTML = "Statut : Vous avez entré"+" "+motSecret+ ". "+"Validez pour continuer"
					document.getElementById("indication2").style.display="none";
					document.getElementById("validation").style.display="block";
				}
			
})

document.getElementById("buttonvalid").addEventListener("click", () => {
			motDevine=motSecret;                                                                                 /*Affecte le mot_secret à motDevine*/
			
			for (i=0; i<longueur; i++){																		     /*Remplace toutes les lettre de motDevine par des tirets*/
				motDevine=motDevine.replace(motSecret.charAt(i),"_");
			}
		document.getElementById("indication2").innerHTML= motDevine;	                                         /*Ecrit dans la div le motDevine (des tirets donc)*/
		document.getElementById("indication2").style.display="block";
		document.getElementById("statut").innerHTML=" Joueur 2 : Vous disposez de 10 essais pour trouver le mot ci-dessous"; /*Change le statut dans la div*/
		document.getElementById("validation").style.display="none";                                                /*Cache le bouton pour valider le motSecret*/
		document.getElementById("indication1").style.display="block";
		document.getElementById("mot_secret").value="";
})

/*LETTRES : Affecte la lettre cliquée à lettreEntree, change le background et Déclenche la fonction principale*/

document.getElementById("buttonlettre").addEventListener("click", () => {
lettreEntree=document.getElementById("lettreEntree").value;


	
	if (essai>0 && motDevine !== motSecret) {               /*Vérifications et affecte 0 à indice et incrémente d'un nbreEssai*/
		indice=0 ;
		nbreEssai=nbreEssai+1;
		
		for (i=0; i<longueur; i++){                                             /*boucle sur la longueur de motSecret*/
			lettreExtr=motSecret.charAt(i);                                     /*Affecte à lettreExtr la lettre i de motSecret*/
			if (lettreExtr == lettreEntree){                                    /*Vérifie si la lettre entrée = lettre extraite si pas le cas pour chaque tour: aucune lettre trouvée*/
				indice=indice+1;                                              /*Incrémente indice de 1*/
				motDevine=setCharAt(motDevine, i, lettreExtr);	              /*Remplace le tiret par la lettre extraite à la posiition i*/
				nbreLettre=nbreLettre+1		                                 /*Incrémente nbreLettre de 1*/
			}
		
		}
		if (indice != 0 && motDevine !== motSecret) {                                                      /*Si au moins une lettre trouvée */
		document.getElementById("statut").innerHTML="Bravo! Il vous reste :" +" "+ essai + " "+ "essai(s).";
		document.getElementById("indication2").innerHTML= motDevine;
		document.getElementById(lettreEntree).style.backgroundColor = "green"; 
		}

		else if (indice==0) {                                                                            /*Si aucune lettre trouvée*/
			essai=essai-1;
			document.getElementById("statut").innerHTML="Dommage, il vous reste :" +" "+ essai + " "+ "essai(s).";
			document.getElementById("indication2").innerHTML= motDevine;

		}
		document.getElementById("lettreEntree").value="";
		    /*AFFICHAGE DES IMAGES*/
			if(essai==9) {
			document.getElementById('img1').style.display = "inline-block";
			imageact=img1;
			}
			if(essai==8) {
			document.getElementById('img1').style.display = "none";
			document.getElementById('img2').style.display = "inline-block";
			imageact=img2;
			}
			if(essai==7) {
			document.getElementById('img2').style.display = "none";
			document.getElementById('img3').style.display = "inline-block";
			imageact=img3;
			}
			if(essai==6) {
			document.getElementById('img3').style.display = "none";
			document.getElementById('img4').style.display = "inline-block";
			imageact=img4;
			}
			if(essai==5) {
			document.getElementById('img4').style.display = "none";
			document.getElementById('img5').style.display = "inline-block";
			imageact=img5;
			}
			if(essai==4) {
			document.getElementById('img5').style.display = "none";
			document.getElementById('img6').style.display = "inline-block";
			imageact=img6;
			}
			if(essai==3) {
			document.getElementById('img6').style.display = "none";
			document.getElementById('img7').style.display = "inline-block";
			imageact=img7;
			}
			if(essai==2) {
			document.getElementById('img7').style.display = "none";
			document.getElementById('img8').style.display = "inline-block";
			imageact=img8;
			}
			if(essai==1) {
			document.getElementById('img8').style.display = "none";
			document.getElementById('img9').style.display = "inline-block";
			imageact=img9;			
			}
		}

	/*RESULTAT DE FIN SOIT PERDU SOIT GAGNÉ*/
	if (essai==0) {
		document.getElementById('img9').style.display = "none";
		document.getElementById('img10').style.display = "inline-block";
		document.getElementById("corps").style.background = "#d43535";		
		document.getElementById("statut").innerHTML="Vous avez perdu, le mot était :" +" "+ motSecret +". "+ "Vous avez trouvé" +" "+ nbreLettre +" "+ "lettre(s) correct(s). Appuyez sur F5 pour une nouvelle partie !"
		document.getElementById("indication").style.display= "none";
		document.getElementById("indication2").innerHTML= motDevine;
		document.getElementById("indication").style.display="none";
	}
	else if (motSecret==motDevine) {
		document.getElementById('img1').style.display = "none";
		document.getElementById('img2').style.display = "none";
		document.getElementById('img3').style.display = "none";
		document.getElementById('img4').style.display = "none";
		document.getElementById('img5').style.display = "none";
		document.getElementById('img6').style.display = "none";
		document.getElementById('img7').style.display = "none";
		document.getElementById('img8').style.display = "none";
		document.getElementById('img9').style.display = "none";
		document.getElementById('img11').style.display = "inline-block";
		document.getElementById("statut").innerHTML="Félicitations, vous avez gagné"+". " + "Vous avez trouvé en"+" "+ nbreEssai+" " + "essai(s). Appuyez sur F5 pour une nouvelle partie !";
		document.getElementById("indication2").innerHTML= motDevine
		document.getElementById(lettreEntree).style.backgroundColor = "green"; 
	}
})
