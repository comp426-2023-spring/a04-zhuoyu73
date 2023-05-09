export function rps(shot) {
  	const user_choice = ["rock", "paper", "scissors"];
	if (shot != undefined){
		if (user_choice.includes(shot)){
			const choices = ['rock', 'scissors', 'paper'];
			const random_index = Math.floor(Math.random()*(choices.length-1));
			const random_choice = choices[random_index];
			if (shot == random_choice){
			console.log(`
				{"player":"${shot}","opponent":"${random_choice}","result":"tie"}
				`)
			} else if(
				(shot == 'rock' && random_choice == 'scissors') ||
				(shot == 'paper' && random_choice == 'rock') ||
				(shot == 'scissors' && random_choice == 'paper')){
				console.log(`
				{"player":"${shot}","opponent":"${random_choice}","result":"win"}
				`)
			} else {
				console.log(`
				{"player":"${shot}","opponent":"${random_choice}","result":"lose}
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
		{"player":"${random_choice}"}`)
	}
}


export function rpsls(shot) {
	const user_choice = ['rock', 'scissors', 'paper', 'lizard', 'spock'];
	if (shot != undefined){
		if (user_choice.includes(shot)){
			const choices = ['rock', 'scissors', 'paper', 'lizard', 'spock'];
			const random_index = Math.floor(Math.random()*(choices.length-1));
			const random_choice = choices[random_index];
			if (shot == random_choice){
			console.log(`{"player":"${shot}","opponent":"${random_choice}","result":"tie"}`)
			} else if (
			(shot == 'rock' && random_choice == 'scissors') ||
			(shot == 'paper' && random_choice == 'rock') ||
			(shot == 'scissors' && random_choice == 'paper') ||
			(shot == 'lizard' && random_choice == 'paper') ||
			(shot == 'spock' && random_choice == 'scissors') ||
			(shot == 'rock' && random_choice == 'lizard') ||
			(shot == 'paper' && random_choice == 'spock')){
			console.log(`{"player":"${shot}","opponent":"${random_choice}","result":"win"}`)
			} else {
			console.log(`{"player":"${shot}","opponent":"${random_choice}","result":"lose"}`)
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

