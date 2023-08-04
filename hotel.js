
        function principal(){

		var hotelNome, usuario;
		let senha;
		let hospedes = [];
		function login() {
			hotelNome = prompt("Informe o nome do hotel");
			alert("O nome do hotel é " + hotelNome);

			usuario = prompt("Informe o nome de usuário");
			senha = prompt("Informe a senha de quatro digitos");
			while (senha != 2678) {
				senha = prompt("Senha incorreta!!! Informe a senha correta")
			}
			alert("Bem vindo ao hotel " + hotelNome + ", " + usuario + " é um prazer ter você por aqui")
			inicio();
		}
		
		function inicio() {

			var escolha = parseInt(prompt('Selecione uma opção\n1.) Reserva de Quartos\n2.) Cadastro de Hóspedes\n3.) Abastecimento de Carros\n4.) Eventos e festas\n5.) Reservar buffet\n6.) Reservar auditório\n7.)Reservar Restaurante\n8.)Abastecer Carro\n9.)Ar Condicionado\n10.)Sair'));

			switch (escolha) {
				case 1:
					reserva_quartos();
					break;
				case 2:
					cadastro_hospedes();
					break;
				case 3:
					abastecer_carros();
					break;
				case 4:
					eventos();
					break;
				case 5:
					comida();
					break;
				case 6:
					reserva_auditorio();
					break;
				case 7:
					restaurante_reserva();
					break;
				case 8:
					abastecer_carros();
					break;
				case 9:
					arCondicionado();
					break;
				case 10:
					sair();
					break;
				default:
					erro();
					inicio();
					break;
			}
		}

		function reserva_quartos() {
			alert('HOTEL ' + hotelNome + '- RESERVA DE QUARTOS');
			let valorDiaria = prompt("Informe o valor da diaria");

			if (valorDiaria <= 0) {
				alert("Valor inválido!!! o valor da diaria deve ser maior que zero")
				inicio();
			}

			let diaria = prompt("Informe a quantidade de dias");

			if (diaria <= 0 || diaria > 30) {
				alert("Valor inválido!!! a quantidade de dias deve estar entre 1 e 30 dias")
				inicio();
			}

			let contaDiaria = valorDiaria * diaria;
			alert('O valor de ' + diaria + ' dias de hospedagem é de R$' + contaDiaria)
			let hospede = prompt("Qual o nome do hóspede ?")
			let confirmacao = prompt(usuario + ', você confirma a hospedagem para ' + hospede + ' por ' + diaria + ' dias ? S/N')

			switch (confirmacao.charAt(0).toUpperCase()) {
				case "S":
					alert(usuario + ', reserva efetuada para ' + hospede + '. O valor total é de R$' + contaDiaria);
					break;
				case "N":
					alert(usuario + ', reserva não efetuada')
					break;
				default:
					alert("ERROR!!! você informou algo não condizente")
					break;
			}
			inicio();
		}

		function cadastro_hospedes() {
			alert('HOTEL ' + hotelNome + ' - CADASTRO DE HÓSPEDES');
			var opcaoCadastro = parseInt(prompt("Selecione uma opção:\n1- cadastrar com preço;\n2 - cadastro padrão;\n3- pesquisar;\n4-listar;\n5- sair. "));
			let nome;
			switch (opcaoCadastro) {
				case 1:
					let diariaPadrao = prompt("Informe a diaria Padrão")
					let idadeH;
					let gratuito = 0;
					let meia = 0;
					let valorTotal = 0;

					while (nome !== "PARE") {
						nome = prompt("Qual o nome do Hóspede?");

						if (nome !== "PARE") {
							idadeH = parseInt(prompt("Qual a idade do Hóspede?"));

							if (idadeH < 6) {
								alert(nome + " cadastrado(a) com sucesso. " + nome + " possui gratuidade.");
								gratuito++;
								hospedes.push(nome);

							} else if (idadeH > 60) {
								alert(nome + " cadastrado(a) com sucesso. " + nome + " paga meia.");
								meia++;
								valorTotal += diariaPadrao / 2;
								hospedes.push(nome);
							} else {
								alert(nome + " cadastrado(a) com sucesso.");
								valorTotal += parseInt(diariaPadrao);
								hospedes.push(nome);
							}
						}
					}

					alert("O valor total das hospedagens é: R$" + valorTotal + "; " + gratuito + " gratuidade(s); " + meia + " meia(s).");
					cadastro_hospedes();
					break;

				case 2:
					while (nome !== "PARE") {
						nome = prompt("Qual o nome do Hóspede?");
						if (nome !== "PARE") {
							if (hospedes.length < 15) {
								hospedes.push(nome);
								alert('Hóspede ' + nome + ' foi cadastrado com sucesso!');
							} else {
								alert("Máximo de cadastros atingido.");
							}
						}
					}
					cadastro_hospedes();
					break;

				case 3:
					nome = prompt("Qual o nome do hóspede?");
					if (hospedes.includes(nome)) {
						alert('Hóspede ' + nome + ' foi encontrado.');
					} else {
						alert("Hóspede não encontrado.");
					}
					break;

				case 4:
					if (hospedes.length === 0) {
						alert("Não há hóspedes cadastrados");
					} else {
						alert('Hóspedes cadastrados:\n' + hospedes.join("\n"));
					}
					cadastro_hospedes();
					break;

				case 5:
					var confirma = confirm('Você deseja voltar ao menu inicial?');
					if (confirma) {
						inicio();
					} else {
						cadastro_hospedes();

					}
					break;

				default:
					alert("ERROR!!! você informou algo não condizente");
					cadastro_hospedes();
					break;




			}
		}
		function eventos() {
			alert('HOTEL ' + hotelNome + '- RESERVA PARA EVENTOS');
			const garconValor = 10.50;
			var eventoTempo = parseInt(prompt("Informe a duração do evento/festa em horas"));
			var garconQnt = parseInt(prompt("Informe a quantidade de garçons que serão necessários"));
			var valor = garconQnt * garconValor * eventoTempo;

			alert('custo total R$' + valor);

			var confirmacao = prompt("Confirma a reserva S/N");

			switch (confirmacao.charAt(0).toUpperCase()) {
				case 'S':
					alert(usuario + ', reserva efetuada com sucesso');
					break;

				case 'N':
					alert(usuario + ', reserva não efetuada')
					break;
				default:
					alert("ERROR!!! você informou algo não condizente")
					break;

			}
			inicio();
		}
		function comida() {
			alert('HOTEL ' + hotelNome + '- BUFFET RESERVA');
			let numeroConvidados = parseInt(prompt("Informe quantos convidados irão comparecer ao evento"))
			if (numeroConvidados <= 0 || numeroConvidados > 350) {
				alert("Quantidade de convidados superior à capacidade máxima")
				comida();
			} else {
				let cafeQnt = numeroConvidados * 0.2; let aguaQnt = numeroConvidados * 0.5; let salgadoQnt = numeroConvidados * 7;
				let valorTotal = (cafeQnt * 0.8) + (aguaQnt * 0.4) + ((salgadoQnt / 100) * 34);

				alert("O evento precisará de " + cafeQnt + " litros de café, " + aguaQnt + " litros de água, " + salgadoQnt + " salgados. O custo total do evento será de R$" + valorTotal);

				let confirmacao = prompt(usuario + ', você confirma a reserva ? S/N')

				switch (confirmacao.charAt(0).toUpperCase()) {
					case "S":
						alert(usuario + ', reserva efetuada com sucesso');
						break;
					case "N":
						alert(usuario + ', reserva não efetuada')
						break;
					default:
						alert("ERROR!!! você informou algo não condizente")
						break;
				}
				inicio();
			}
		}
		function reserva_auditorio() {
			alert('HOTEL ' + hotelNome + '- RESERVA DO AUDITÓRIO');
			let numeroLugares = prompt("Qual o número de convidados para seu evento ?");
			if (numeroLugares <= 0 || numeroLugares > 350) {
				alert("Quantidade de convidados superior à capacidade máxima ou invalida")
				reserva_auditorio();
			} else if (numeroLugares < 150) {
				alert("Use o auditório Laranja");
			}
			else if (numeroLugares > 150 && numeroLugares < 220) {
				let cadeirasFaltando = 220 - numeroLugares;
				alert("Use o auditório Laranja (inclua mais " + cadeirasFaltando + " cadeiras)")
			} else {
				alert("Use o auditório colorado");
			}
			var confirmacao = prompt("Confirma a reserva S/N");

			switch (confirmacao.charAt(0).toUpperCase()) {
				case "S":
					alert(usuario + ', reserva efetuada com sucesso');
					break;
				case "N":
					alert(usuario + ', reserva não efetuada')
					break;
				default:
					alert("ERROR!!! você informou algo não condizente")
					break;
			}
			inicio();
		}
		function restaurante_reserva() {
			alert('HOTEL ' + hotelNome + '- RESERVA RESTAURANTE');
			let diaSemana = prompt("Informe o dia da semana que deseja reservar");
			let horas = prompt("Informe o hórario que deseja")
			let nomeEmpresa;
			if (diaSemana == 'sabado' || diaSemana == 'domingo') {
				if (horas < 7 || horas > 15) {
					alert("Restaurante indisponivel");
					inicio();
				} else {
					nomeEmpresa = prompt("Qual o nome da empresa?");
					alert("Restaurante reservado para " + nomeEmpresa + ", " + diaSemana + " às " + horas + "hrs");
				}
			}
			if (diaSemana == 'segunda' || diaSemana == 'terça' || diaSemana == 'quarta' || diaSemana == 'quinta' || diaSemana == 'sexta') {
				if (horas < 7 || horas > 23) {
					alert("Restaurante indisponivel");
					inicio();
				} else {
					nomeEmpresa = prompt("Qual o nome da empresa?");
					alert("Restaurante reservado para " + nomeEmpresa + ", " + diaSemana + " às " + horas + "hrs");
				}
			}

		}

		function abastecer_carros() {
			alert('HOTEL - '+hotelNome+ ' ABASTECIMENTO DE CARROS');
			let wayneAl = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"));
			let wayneGs = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?"));
			let starkAl = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"));
			let starkGs = parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrole?"));

			let diviWayne = wayneAl / wayneGs;
			let diviStark = starkAl / starkGs;

			let postoBarato = '';
			let alOuGs = '';
			if (diviWayne < 0.7 || diviStark < 0.7) {
				alOuGs = 'Gasolina';
				if (diviWayne > diviStark) {
					postoBarato = 'Wayne Oil';
				} else {
					postoBarato = 'Stark Petrol';
				}
			} else {
				alOuGs = 'Álcool';
				if (diviWayne > diviStark) {
					postoBarato = 'Stark Petrol';
				} else {
					postoBarato = 'Wayne Oil';
				}
			}

			alert('é mais barato abastecer com ' + alOuGs + ' no posto ' + postoBarato);

		}
		function arCondicionado() {
			alert('HOTEL - '+hotelNome+ ' AR CONDICIONADO');
			
			const quantidadeMinimaParaDesconto = 5;

			
			let menorOrcamento = Infinity;
			let empresaMenorOrcamento = "";

			
			while (true) {
				
				const nomeEmpresa = prompt("Qual é o nome da empresa?");
				const valorPorAparelho = parseFloat(prompt("Qual é o valor do serviço por aparelho?"));
				const quantidadeAparelhos = parseInt(prompt("Quantos aparelhos precisam de manutenção?"));
				const percentualDesconto = parseFloat(prompt("Qual é o percentual de desconto? (deixe em branco para 0)")) || 0;

				
				const valorTotal = valorPorAparelho * quantidadeAparelhos;

				
				let valorTotalComDesconto;
				if (quantidadeAparelhos >= quantidadeMinimaParaDesconto) {
					const valorDesconto = valorTotal * percentualDesconto / 100;
					valorTotalComDesconto = valorTotal - valorDesconto;
				} else {
					valorTotalComDesconto = valorTotal;
				}

				
				alert(`O serviço de ${nomeEmpresa} custará R$ ${valorTotalComDesconto.toFixed(2)}.`);

				
				if (valorTotalComDesconto < menorOrcamento) {
					menorOrcamento = valorTotalComDesconto;
					empresaMenorOrcamento = nomeEmpresa;
				}

				
				const resposta = prompt("Deseja informar novos dados? (S/N)").toUpperCase();
				if (resposta === "N") {
					break;
				}
			}

			
			alert(`O orçamento de menor valor é o de ${empresaMenorOrcamento} por R$ ${menorOrcamento.toFixed(2)}.`);
		}

		function erro() {
			alert('Por favor, informe um número entre 1 e 10');
			inicio();
		}

		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				alert("Muito obrigado e até logo, " + usuario)
				window.close();
			} else {
				inicio();
			}
		}
		login();
		inicio();

    }



