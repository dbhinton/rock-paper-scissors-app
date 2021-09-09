
const rpsLookup = {
	rock: {
		imgUrl: 'imgs/rock.png',
		beats: 'scissors'
	},
	paper: {
		imgUrl: 'imgs/paper.png',
		beats: 'rock'
	}, 
	scissors: {
		imgUrl: 'imgs/scissors.png',
		beats: 'paper'
	}
}

rpsLookup['rock']
// let scores = {
// 	player: 0,
// 	ties: 0,
// 	computer: 0
// }

// Initialize our state variables

let scores;
let results;
let winner;



// cache our elemetns

const scoreEls = {
	player: document.querySelector('#p-score'),
	tie: document.querySelector('#t-score'),
	computer: document.querySelector('#c-score')
}

const resultEls = {
	player: {
		borderEl: document.querySelector('#p-result'),
		imgEl: document.querySelector('#p-result > img')
	},
	computer: {
		borderEl: document.querySelector('#c-result'),
		imgEl: document.querySelector('#c-result > img')
	}
}

// alternative to the above
// const playerBorderEl = document.querySelector('#p-result'); // grey 
// const playerImgEl = document.querySelector('#p-result img');

// const computerBorderEl = document.querySelector('#c-result ');
// const computerImgEl = document.querySelector('#c-result img');

document.querySelector('button')
	.addEventListener('click', playRound);


// initialize the values of our state variables i
// in the init function
init()

function init(){

	scores = {
		player: 0,
		tie: 0,
		computer: 0
	}

	results = {
		player: 'rock',
		computer: 'rock'
	}

	winner = null; // 'computer' 'player', 'tie'

	render()
}

function render(){
	// render scores
    // for in loop is used to loop over an object
    // scoreEls['rock']

    // step 1. loop over the scores and log out the values
    for (let score in scores){
        // console.log(score, "< each property name aka key name");
        // // console.log(scores[score])
       
        scoreEls[score].textContent = scores[score];
         // step 2. assign those values to the appropiate dom location using the 
        // scoreEls you cached earlier
    }
	
	// update the result div with the picture, using a for in loop
	for (let result in results){
		// console.log(result, '<- this result in for loop')
		console.log(results[result], "< ---- results[result]");
		// console.log(resultEls)
		// console.log(resultEls[result])
		resultEls[result].imgEl.src = rpsLookup[results[result]].imgUrl
		

		if(result === winner){
			resultEls[result].borderEl.style.borderColor = 	'grey';
		} else {
			resultEls[result].borderEl.style.borderColor = 	'white';
		}
		// both of these are equivalent
		resultEls[result].borderEl.style.borderColor = winner === result ? 'grey' : 'white';

		// update the border of the borderEl based on the winner

		// if they won the border should be grey, if not white

		// rpsLookup['rock'].imgUrl
	}

}

function playRound(){
	console.log('click is working');


	// update our results state 
	// using the getRandomRPS

	results.player = getRandomRPS();
	results.computer = getRandomRPS();


	// deterimine the winner
	//if/else if /else statement
	if(results.player === results.computer){
		winner = 'tie';

	} else if(results.computer === rpsLookup[results.player].beats){
		// results.computer === to what results.player beats
		// then the player is the winner
		winner = 'player'


	} else {

		winner = 'computer'

	}


	// update the score
	scores[winner]++
	// same thing ^ 
	// scores[winner] = scores[winner] + 1
	// 

	render()

}

function getRandomRPS(){
	const choice = ['rock', 'paper', 'scissors'];
	const randomIndex = Math.floor(Math.random() * 3);
	// return randomnly, either rock, paper or scissors

	// return choice[randomIndex]

	// const choice = Object.keys(rpsLookup);
	// const randomIndex = Math.floor(Math.random() *3)


	return choice[randomIndex]

	// return['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]
}

// function getRandomRPS(){
//     let random = Math.floor(Math.random()* 3)
//     if(random === '1'){
//         return 'rock'
//      } else if(random === '2'){
//             return 'paper'
//         }
//     else {
//         return 'scissors'
//     }
// }


// function add(){


// 	if(){

// 	} else {

// 	}


// }// end of the add function