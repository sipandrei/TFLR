const form = document.querySelector("form");
const comanda = document.querySelector("h1");
const raspuns = document.querySelector("#raspuns");
const arataRaspuns = document.querySelector("#arata-raspunsul");

function creareFunctie(nume, domeniu, codomeniu, monotonie, paritate) {
   this.nume = nume;
   this.domeniu = domeniu;
   this.codomeniu = codomeniu;
   this.monotonie = monotonie;
   this.paritate = paritate;
}
function alegeProprietate(obj) {
   let keys = Object.keys(obj);
   let proprietate = keys[Math.floor((keys.length - 1) * Math.random()) + 1];
   return [proprietate, obj[proprietate]];
}

const arctg = new creareFunctie(
   "arctg",
   "reale",
   "(-pi/2;pi/2)",
   "crescatoare",
   "impara"
);
const arcctg = new creareFunctie(
   "arcctg",
   "reale",
   "(0;pi)",
   "descrescatoare",
   "arcctg(-x)=pi-arcctg(x)"
);
const arcsin = new creareFunctie(
   "arcsin",
   "[-1;1]",
   "[-pi/2;pi/2]",
   "crescatoare",
   "impara"
);
const arccos = new creareFunctie(
   "arccos",
   "[-1;1]",
   "[0;pi]",
   "descrescatoare",
   "arccos(-x)=pi-arccos(x)"
);

const variante = [arctg, arcctg, arcsin, arccos];
let funtieAleatoare = variante[Math.floor(Math.random() * 4)];
let proprietateAleasa = alegeProprietate(funtieAleatoare);

comanda.innerText = `Scrieti ce ${proprietateAleasa[0]} are ${funtieAleatoare.nume}`;

form.addEventListener("submit", verificareRaspuns);
arataRaspuns.addEventListener("click", aratareRaspuns);

function verificareRaspuns(e) {
   e.preventDefault();
   if (raspuns.value == proprietateAleasa[1]) console.log("Adevarat");
   else console.log("Gresit!");
   raspuns.value = "";
}
function aratareRaspuns() {
   console.log(proprietateAleasa[0] + " : " + proprietateAleasa[1]);
}
