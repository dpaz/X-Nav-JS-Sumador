function sumador () {
	var operation = document.getElementById("op").innerHTML;
	var ops = operation.split("+",2);
	var res ="="+(parseInt(ops[0])+parseInt(ops[1]));
	
	var element = document.getElementById("res");
	element.innerHTML = res;
	
	document.getElementById("Enlace").innerHTML = ""; 
}

function otraSuma(){
	var operation = document.getElementById("op");
	
	op1 = parseInt(getRandomArbitrary(-1000,1000));
	op2 = parseInt(getRandomArbitrary(-1000,1000));
	cadena = op1+"+"+op2;
	
	operation.innerHTML = cadena;
	document.getElementById("res").innerHTML= "";
	document.getElementById("Enlace").innerHTML = "Add!"; 
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
