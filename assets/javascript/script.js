// Pokemon Catch Game

// beginning score rng
var targetNumber = Math.floor(Math.random() * (50) + 70);

$("#targetScore").html("Target Score: " + targetNumber);

// scoreboard variables 
var wins = 0;
var losses = 0;
var counter = 0;

// funtion for reroll 4 numbers - CANNOT GET WORKING
function reroll (){
	fourNumbers = [];
	for (var i=0; i<4; i++) {	
		fourNumbers.push(numberOptions[Math.floor(Math.random() * numberOptions.length)]);
	}
}

// assign rng values 1-12 to the four pokes
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


// numbers array
var fourNumbers = [];


// loop for 4 random numbers - can not guarantee four DIFFERENT numbers
for (var i=0; i<4; i++) {	
	fourNumbers.push(numberOptions[Math.floor(Math.random() * numberOptions.length)]);
}

// add 4 images to the page and assign fourNumbers
	var bulba = $("<img>");
	bulba.addClass("poke-image");
	bulba.attr("src", "assets/images/bulbasaur.gif");
	bulba.attr("data-pokevalue", fourNumbers[0]);
	$("#pokes").append(bulba);

	var squirt = $("<img>");
	squirt.addClass("poke-image");
	squirt.attr("src", "assets/images/squirtle.gif");
	squirt.attr("data-pokevalue", fourNumbers[1]);
	$("#pokes").append(squirt);

	var pika = $("<img>");
	pika.addClass("poke-image");
	pika.attr("src", "assets/images/pikachu.gif");
	pika.attr("data-pokevalue", fourNumbers[2]);
	$("#pokes").append(pika);

	var char = $("<img>");
	char.addClass("poke-image");
	char.attr("src", "assets/images/charmander.gif");
	char.attr("data-pokevalue", fourNumbers[3]);
	$("#pokes").append(char);



// on-click event for image class "poke-image"
$(".poke-image").on("click", function() {
	console.log("poke values: " + fourNumbers);

	var pokeValue = ($(this).attr("data-pokevalue"));
	pokeValue = parseInt(pokeValue);

	counter += pokeValue;
	$("#currentScore").html("Current Score: " + counter);

	// check if click counter matches targetNumber
	if (counter === targetNumber) {
		wins++;
		$("#winlose").html("POKEMON CAUGHT!");
		counter = 0;
		targetNumber = Math.floor(Math.random() * (50)) + 70;
		$("#targetScore").html("Target Score: " + targetNumber);
		$("#currentScore").html("Current Score: 0 ");
		reroll();
		// console.log("poke values: " + fourNumbers);
		// TODO: can't get it to re-select fourNumbers
		// TODO: clear the "you win"/"you lose" on new iteration of the game
	}
	// if click counter exceeds targetNumber
	else if (counter >= targetNumber) {
		$("#winlose").html("POKEMON FLED!");
		losses++;
		counter = 0;
		targetNumber = Math.floor(Math.random() * (50)) + 70;
		$("#targetScore").html("Target Score: " + targetNumber);
		$("#currentScore").html("Current Score: 0 ");
		reroll();
		// console.log("poke values: " + fourNumbers);
		// TODO: can't get it to re-select fourNumbers
		// TODO: clear the "you win"/"you lose" on new iteration of the game
	}

	// update scoreboard with wins and losses
	$("#scoreboard").html("<p>Caught: " + wins + "</p>" + "<p>Fled: " + losses + "</p>")

});