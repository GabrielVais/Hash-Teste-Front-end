const inputVenda = document.querySelector("#venda");

const inputParcelas = document.querySelector("#parcelas");

const inputPotencial = document.querySelector("#porcentual");

const btnCalcular = document.querySelector("#btnCalcular");

function calculaAntecipacao(){

	let Valorvenda = inputVenda.value;

	let valorParcelas = inputParcelas.value;

	let valorPotencial = inputPotencial.value;

	if(Valorvenda && valorParcelas && valorPotencial !== null){

	let vendaTotal  = parseFloat((Valorvenda / valorParcelas));

	let porcentoTotal = parseFloat((vendaTotal * (valorPotencial / 100)));

	let total = vendaTotal - porcentoTotal;

	let $amanha = document.querySelector("#output-tomorrow");
	
	let $15dias = document.querySelector("#output-15days")

	let $30dias = document.querySelector("#output-30days");

	let $90dias = document.querySelector("#output-90days");

	$amanha.textContent = parseFloat(total).toFixed(2);

	$15dias.textContent = parseFloat($amanha.textContent - porcentoTotal).toFixed(2);

	$30dias.textContent = parseFloat($15dias.textContent - porcentoTotal).toFixed(2);
	
	$90dias.textContent = parseFloat($30dias.textContent - porcentoTotal).toFixed(2);
	
	console.log(total);

	}
}

var inputs = document.querySelectorAll('input[type=number]');

inputs.forEach(input => {

	input.addEventListener('keyup', function(){

		 if(inputs.length > 0){

		 	calculaAntecipacao();

		 }

	});

})

