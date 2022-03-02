/*05 ALGO FACTOR*/

var n;
var j=1;
var k;
var l

document.getElementById("button1").addEventListener("click", () => {
	n = document.getElementById("factor").value;
	l=parseInt(n)+parseInt(1);
		for (k=1; k<l; k++) {
			j = parseInt(j)*parseInt(k)
		}
		
	document.getElementById("divresult1").innerHTML = "La factorielle de"+" "+n+" "+"est"+" "+j+".";
	document.getElementById("hideshow").style.display="block";
	document.getElementById("maindiv1").style.display="none";
})

document.getElementById("button2").addEventListener("click", () => {
	document.location.reload();
	document.getElementById("factor").value="";
})