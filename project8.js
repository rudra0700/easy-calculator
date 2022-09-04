document.getElementById("btn").addEventListener("click", cal)

function cal(){
	var opr1 = document.getElementById("first").value
	var opr2 = document.getElementById("second").value
	var ope = document.getElementById("ope").value
	if(ope == "+"){
		var result = parseInt(opr1) + parseInt(opr2)
		
	}
	if(ope == "-"){
		var result = parseInt(opr1) - parseInt(opr2)
		
	}
	if(ope == "*"){
		var result = parseInt(opr1) * parseInt(opr2)
		
	}
	if(ope == "/"){
		var result = parseInt(opr1) / parseInt(opr2)
		
	}

	document.getElementById("res").value = result
}