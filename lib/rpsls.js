	function rps(shot) {
  		const user_choice = ["rock", "paper", "scissors"];
		if (user_choice){
			if (user_choice == 'rock' || user_choice =='scissors' || user_choice == 'paper'){
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


function rpsls(shot) {
	const user_choice = ['rock', 'scissors', 'paper', 'lizard', 'spock'];
	if (user_choice){
	if (user_choice == 'rock' || user_choice =='scissors' || user_choice == 'paper'
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

module.exports = {rps, rpsls};
