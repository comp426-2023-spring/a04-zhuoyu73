	export function rps(args) {
  		const user_choice = args[0];
		if (user_choice){
			if (user_choice === '-r' || user_choice === '--rules'){
			console.log(`
				Rules for Rock Paper Scissors:
				 - Scissors CUTS Paper
				 - Paper COVERS Rock
				 - Rock CRUSHES Scissors
				 `)
			process.exit(0);
			} else if (user_choice === '-h' || user_choice === '--help'){
				console.log(`
				Usage: node-rps [SHOT]
				Play Rock Paper Scissors (RPS)
					-h, --help      display this help message and exit
					-r, --rules     display the rules and exit
				Examples:
					node-rps        Return JSON with single player RPS result.
					e.g. {"player":"rock"}
					node-rps rock   Return JSON with results for RPS played against a simulated opponent.
					e.g {"player":"rock","opponent":"scissors","result":"win"}
					`)
				process.exit(0);
			} else if (user_choice == 'rock' || user_choice =='scissors' || user_choice == 'paper'){
				const choices = ['rock', 'scissors', 'paper'];
				const random_index = Math.floor(Math.random()*(choices.length-1));
				const random_choice = choices[random_index];
				if (user_choice == random_choice){
				console.log(`
					{"player":"${user_choice}","opponent":"${random_choice}","result":"tie"}
					`)
				} else if(
					(user_choice == 'rock' && random_choice == 'scissors') ||
					(user_choice == 'paper' && random_choice == 'rock') ||
					(user_choice == 'scissors' && random_choice == 'paper')){
					console.log(`
					{"player":"${user_choice}","opponent":"${random_choice}","result":"win"}
					`)
				} else {
					console.log(`
					{"player":"${user_choice}","opponent":"${random_choice}","result":"lose}
					`)
				}
			} else {
			console.log(`Rules for Rock Paper Scissors:
				 - Scissors CUTS Paper
				 - Paper COVERS Rock
				 - Rock CRUSHES Scissors`);
			process.exit(0);
			}
		} else {
			const choices = ['rock', 'scissors', 'paper'];
			const random_index = Math.floor(Math.random()*(choices.length-1));
			const random_choice = choices[random_index];
			console.log(`
			{"player":"${random_choice}"}
			`)
		}
	}

export function rpsls(args) {
	const user_choice = args[0];
	if (user_choice){
	if (user_choice === '-r' || user_choice === '--rules'){
		console.log(`
				Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
					- Scissors CUTS Paper
					- Paper COVERS Rock
					- Rock SMOOSHES Lizard
					- Lizard POISONS Spock
					- Spock SMASHES Scissors
					- Scissors DECAPITATES Lizard
					- Lizard EATS Paper
					- Paper DISPROVES Spock
					- Spock VAPORIZES Rock
					- Rock CRUSHES Scissors
				 `)
		process.exit(0);
	} else if (user_choice === '-h' || user_choice === '--help'){
		console.log(`
				Usage: node-rpsls [SHOT]
				Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
					-h, --help        display this help message and exit
					-r, --rules       display the rules and exit
				Examples:
				node-rpsls        Return JSON with single player RPSLS result.
					e.g. {"player":"rock"}
				node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}
					`)
		process.exit(0);
	} else if (user_choice == 'rock' || user_choice =='scissors' || user_choice == 'paper'
			 || user_choice == 'spock' || user_choice == 'lizard'){
		const choices = ['rock', 'scissors', 'paper', 'lizard', 'spock'];
		const random_index = Math.floor(Math.random()*(choices.length-1));
		const random_choice = choices[random_index];
		if (user_choice == random_choice){
			console.log(`{"player":"${user_choice}","opponent":"${random_choice}","result":"tie"}`)
		} else if (
			(user_choice == 'rock' && random_choice == 'scissors') ||
			(user_choice == 'paper' && random_choice == 'rock') ||
			(user_choice == 'scissors' && random_choice == 'paper') ||
			(user_choice == 'lizard' && random_choice == 'paper') ||
			(user_choice == 'spock' && random_choice == 'scissors') ||
			(user_choice == 'rock' && random_choice == 'lizard') ||
			(user_choice == 'paper' && random_choice == 'spock')){
			console.log(`{"player":"${user_choice}","opponent":"${random_choice}","result":"win"}`)
		} else {
			console.log(`{"player":"${user_choice}","opponent":"${random_choice}","result":"lose}`)
		}
	} else {
		console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
				- Scissors CUTS Paper
				- Paper COVERS Rock
				- Rock SMOOSHES Lizard
				- Lizard POISONS Spock
				- Spock SMASHES Scissors
				- Scissors DECAPITATES Lizard
				- Lizard EATS Paper
				- Paper DISPROVES Spock
				- Spock VAPORIZES Rock
				- Rock CRUSHES Scissors`);
		process.exit(0);
		}
	} else {
		const choices = ['rock', 'scissors', 'paper', 'lizard', 'spock'];
		const random_index = Math.floor(Math.random()*(choices.length-1));
		const random_choice = choices[random_index];
		console.log(`{"player":"${random_choice}"}`)
	}
}

