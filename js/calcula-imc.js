var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente")

for(var i = 0; i < pacientes.length;i++){

	var paciente = pacientes[i];

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;
	var alturaEhValida = validaAltura(altura);

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;
	var pesoEhValido = validaPeso(peso);

	var tdImc = paciente.querySelector(".info-imc");

	if(!pesoEhValido){
		tdPeso.textContent = "Peso inválido!";
		pesoEhValido = false;
		paciente.classList.add("paciente-invalido");
	}

	if(!alturaEhValida){
		tdAltura.textContent = "Altura inválida!";
		alturaEhValida = false;
		paciente.classList.add("paciente-invalido");
	}


	if(alturaEhValida && pesoEhValido){
		var imc = calculaImc(peso,altura);
		tdImc.textContent = imc;
	}
	else{
		tdImc.textContent ="Peso e/ou Altura Inválidos!"
	}	
}
function calculaImc(peso,altura){
	var imc = 0;
	imc = peso/(altura*altura);
	return imc.toFixed(2);
}

function validaPeso(peso){
	if (peso >0 && peso<1000){
		return true;
	} else{
		return false;
	}
}

function validaAltura(altura){
	if(altura>0 && altura <3.00){
		return true;
	} else{
		return false;
	}
}