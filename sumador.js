function sumador () {
	var operation = document.getElementById("op").innerHTML;
	console.log(operation);
	var ops = operation.split("+",2);
	var res ="="+(parseInt(ops[0])+parseInt(ops[1]));
	
	var element = document.getElementById("res");
	element.innerHTML = res;
}
