var buton = document.getElementById("button")
var body = document.getElementById("body")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var image = document.getElementById("image")
var educatie = document.getElementById("educatie")
var anNastere = document.getElementById("anNastere")

const d = new Date()
var anCurent = d.getFullYear()

buton.addEventListener("click",altaViata)
anNastere.addEventListener("mouseover",age)

function altaViata(){
	nume.innerHTML = "Functie: Senior JS Developer"
	prenume.innerHTML = "Locul de munca: Google"
	educatie.innerHTML = "Experiente: <ul><li>10 ani la google</li><li>Licenta</li><li>2 ani la MC</li></ul>"
	body.style.backgroundColor = "purple"
	nume.style.color = "green"
	prenume.style.color = "green"
	educatie.style.color = "blue"
	image.src = "C:\Users\Stan.Co.Mihail\Downloads\12345.jpg";
	image.style.border = "7px dotted #924"
	image.style.opacity = "70%"
}
function age(){
	anNastere.innerHTML = anCurent - anNastere.innerHTML	
}