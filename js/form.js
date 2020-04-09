var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click",function(event){
	event.preventDefault();

	var form = document.querySelector("#form-adiciona");
	var paciente = obtemPacienteDoFormulario(form);
	
	var erros = validaPaciente(paciente);
	if(erros.length>0){
		exibeMensagensErro(erros);
		return;
	}
	adicionaPacienteNaTabela(paciente);
	form.reset();

	var mensagensErro = document.querySelector("#mensagens-erro");
	mensagensErro.innerHTML = "";
})


/*//obtem os dados do formulário
	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;
	imcTd.textContent = calculaImc(peso,altura);

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);
*/
function adicionaPacienteNaTabela(paciente){
var pacienteTr = criaTr(paciente);
var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form){
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}
	return paciente;
}

function criaTr(paciente){
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");
	pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));
	return pacienteTr;
}

function criaTd(dado, classe){
	var td = document.createElement("td");
	td.classList.add(classe);
	td.textContent = dado;
	

	return td;
}

function validaPaciente(paciente){
	var erros = [];

	if(paciente.nome.length == 0){
		erros.push("O nome não pode ser nulo!");
	}
	if(paciente.peso.length == 0){
		erros.push("O peso não pode ser nulo!");
	}
	if(paciente.altura.length == 0){
		erros.push("A altura não pode ser nula!");
	}
	if(paciente.gordura.length == 0){
		erros.push("A gordura não pode ser nula!");
	}
	if(!validaPeso(paciente.peso)){
		erros.push("Peso inválido");
	}
	if(!validaAltura(paciente.altura)){
		erros.push("Altura inválida!");
	}

	return erros;
}
function exibeMensagensErro(erros){
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";

	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	})
}