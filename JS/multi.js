/*04 ALGO MULTI*/

var j =0
var k
var touche

function insertAfter(newElement, referenceElement) {
    referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
}

document.getElementById("button1").addEventListener("click", () => {
	j=parseInt(document.getElementById("multi").value)
	
		while (j<1 || j>10) {
			j=prompt("Attention !! Vous devez entrer un nombre entre 1 et 10 !");
		}
	
	for (k=10; k>0; k--) {
		m=parseInt(j)*parseInt(k)
		let div = document.createElement('div');
		div.className="spacee";
		div.innerHTML=j+" x "+k+" = "+m;

		document.body.appendChild(div);
		let currentElement = document.getElementById("maindiv1");
		insertAfter(div, currentElement);
	}
	document.getElementById("multi").value="";
})

document.getElementById("button2").addEventListener("click", () => {
	document.location.reload();
})