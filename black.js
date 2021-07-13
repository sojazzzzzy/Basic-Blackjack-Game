//#################################################
//#################################################

//*****************PRACTICE SPACE******************

//console.log("console working")
// let age = 10

// // if (age < 21) {
// // 	console.log("You cant enter the club youngi!")
// // } else {
// // 	console.log("Welcome to the porty!!!")
// // }

// if (age < 100) {
// 	console.log("Not eligible")
// } else if (age === 100) {
// 	console.log("Here is your birthdy card from the King!")
// } else {
// 	console.log("Not eligible, you have already gotten a card!")
// }

// let featuredPosts = [
// 	"Check out my netflix clone", 
// 	"here's the clone for my project", 
// 	"here's my portfolio"
// 	]

// let jazmyne = [
// 	"Jazmyne",
// 	31,
// 	true 
// ]

// let newInfo = "african american"

// jazmyne.push(newInfo)
// console.log(jazmyne)

// FOR LOOP

// for (let i = 10; i <101; i += 10) {
// 	console.log(i)

// 	// if (count > 4) {
// 	// 	console.log("i am greater than 4")
// 	// }
// }


// FOR LOOPS AND ARRAYS

// let cardsP = [3,4,5]

// for (let i = 0; i < cardsP.length; i++){
// 	console.log(cardsP[i])
// }

// let sentence = [
// 	"hello",
// 	"my",
// 	'name',
// 	'is ',
// 	'Per '
// ]

// let greetingEl = document.getElementById('greeting-el')

// for (let i = 0; i < sentence.length; i++) {
// 	greetingEl.textContent += sentence[i] + " "
// }

// RETURN FUNCTIONS!
// let player1Time = 101
// let player2Time = 199

// function getFastestRaceTime(){
// 	if (player1Time < player2Time) {
// 		return player1Time
// 	} else if (player2Time < player1Time) {
// 		return player2Time
// 	} else {
// 		return player1Time
// 	}
// }

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// function totalRaceTime(){
// 	return player1Time + player2Time
// }

// let sumOfRaceTimes = totalRaceTime()
// console.log(sumOfRaceTimes)

// let randomNumber = Math.random() * 6

// console.log(randomNumber)

// function rollDice(){
// 	return Math.floor(Math.random() * 6) + 1 
// }

// let diceRoll = rollDice()
// console.log(diceRoll)

// ********or this can be written as **********

// function rollDice(){
// 	let randomNumber = Math.floor(Math.random() * 6) + 1
// 	return randomNumber
// }

// console.log(rollDice())

		// ********LOGICAL OPERATORS******** //
// let hasCompletedCourse = true
// let givesCertificate = true

// function generateCertificate(){
// 	console.log("Generating certificate")
// }

// if (hasCompletedCourse === true && givesCertificate === true) {
// 	generateCertificate()	
// }
// // ********or this can be written as **********
// // if (hasCompletedCourse && givesCertificate){
// // 	generateCertificate()
// // }


// let hasSolvedChallenge = false
// let hasHintsLeft = false

// function showSolution(){
// 	console.log("Showig the solution...")
// }

// if (hasSolvedChallenge != true && hasHintsLeft!= true) {
// 	showSolution()
// }

// let likesDocumentaries = false
// let likesStartups = true

// function recommendMovie() {
// 	console.log("Hey, check out this new film we think you will like!")
// }

// if (likesDocumentaries === true || likesStartups === true) {
// 	recommendMovie()
// }
//#################################################
//#################################################

    //**************BLACKJACK GAME*****************//

// let min = Math.ceil(2)
// let max = Math.floor(12)


let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById('sum-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector("#cards-el")
// console.log(firstCard)
// console.log(secondCard)
// console.log(sum)
// console.log(messageEl)
let player = {
	name: "Jaz",
	chips: 145
}
console.log(player)

function getRandomCard(){
	let randomCard = Math.floor(Math.random() * 13) + 1 
	if (randomCard > 10){
		return 10
	} else if (randomCard === 1){
		return 11
	} else {
		return randomCard
	}
}

//console.log(getRandomCard())

function startGame(){
	isAlive = true
	let firstCard = getRandomCard()
	let secondCard = getRandomCard()
	cards = [firstCard, secondCard]
	sum = firstCard + secondCard
	renderGame()
}

function renderGame() {
		// console.log('start button clicked')
	if (sum <= 20) {
		message = "Do you want to draw a new card?" 
	} else if (sum === 21) {
		message = "You've got blackjack!"
		hasBlackJack = true
	} else {
		message = "You're out of the game!"
		isAlive = false
	}
		messageEl.textContent = message
		sumEl.textContent = "Sum:" + sum 
		cardsEl.textContent = "Cards: " 
		for (let i = 0; i < cards.length; i++){
			cardsEl.textContent += cards[i] + " "
		}
		//console.log(message)
		// console.log(hasBlackJack)
		// console.log(isAlive)
}


function newCard() {
	console.log("button clicked")
	// let newMin = Math.ceil(2)
	// let newMax = Math.floor(12)
	


	//console.log(cards)
	if (isAlive === true && hasBlackJack === false) {
		let card = getRandomCard()
		sum = sum + card
		cards.push(card)
		console.log(sum)

		renderGame()
	}
}

//#################################################
//#################################################
	//       CLEANED UP CODE HERE        //
//**************BLACKJACK GAME*********************

// let cards = []
// let sum = 0
// let hasBlackJack = false
// let isAlive = false
// let message = " "
// let messageEl = document.getElementById("message-el")
// let sumEl = document.querySelector('#sum-el')
// let cardsEl = document.querySelector("#cards-el")


// function startGame(){
	
// 	isAlive = true
// 	let firstCard = getRandomCard()
// 	let secondCard = getRandomCard()
// 	cards = [firstCard, secondCard]
// 	sum = firstCard + secondCard
// 	renderGame()
// }

// function renderGame() {
	
// 	if (sum <= 20) {
// 		message = "Do you want to draw a new card?" 
// 	} else if (sum === 21) {
// 		message = "You've got blackjack!"
// 		hasBlackJack = true
// 	} else {
// 		message = "You're out of the game!"
// 		isAlive = false
// 	}
// 		messageEl.textContent = message
// 		sumEl.textContent = "Sum:" + sum 
// 		cardsEl.textContent = "Cards: " 
// 		for (let i = 0; i < cards.length; i++){
// 			cardsEl.textContent += cards[i] + " "
// 		}
// }

// function getRandomCard(){
	
// 	let randomCard = Math.floor(Math.random() * 13) + 1 
// 	if (randomCard > 10){
// 		return 10
// 	} else if (randomCard === 1){
// 		return 11
// 	} else {
// 		return randomCard
// 	}
// }

// function newCard() {
	
// 	let card = getRandomCard()
// 	sum = sum + card
// 	cards.push(card)

// 	renderGame()
// }

