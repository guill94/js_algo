/*06 ALGO IMPAIR*/

var j = 0
var k
var compteur

function insertAfter(newElement, referenceElement) {
    referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
}

document.getElementById("button1").addEventListener("click", () => {
	j=document.getElementById("impair").value
	l=parseInt(j);
	for (i=j-1; i>=0; i--) {
		k=(2*i)+1;
		compteur=i+1	
		let div = document.createElement('div');
		div.className="spacee";
		div.innerHTML="le"+" "+compteur+" "+"ème nombre impair est :"+" "+k+".";

		document.body.appendChild(div);
		let currentElement = document.getElementById("maindiv1");
		insertAfter(div, currentElement);

	}
	document.getElementById("impair").value="";
	document.getElementById("maindiv1").style.display="none";
	document.getElementById("hideshow").style.display="block";
})

document.getElementById("button3").addEventListener("click", () => {
	document.location.reload();
})