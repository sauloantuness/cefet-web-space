// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

document.querySelectorAll('.botao-expandir-retrair').forEach(function(button){
	button.addEventListener('click', function(event){
		let p = button.closest('p');
		if(p.classList.contains('expandido')) {
			p.classList.remove('expandido');
			button.innerHTML = '+';
		}
		else {
			p.classList.add('expandido');
			button.innerHTML = '-';
		}
	});
});
