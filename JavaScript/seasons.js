// We can add more conditions to our if...else with an else if statement. The else if statement allows for more than two possible outcomes. You can add as many else if statements as you’d like, to make more complex conditionals!

// The else if statement always comes after the if statement and before the else statement. The else if statement also takes a condition. The else if statements allow you to have multiple possible outcomes. if/else if/else statements are read from top to bottom, so the first condition that evaluates to true from the top to bottom is the block that gets executed.

let season = 'summer';

if (season === 'spring') {
	console.log("It's spring! The trees are budding!");
} else if (season === 'winter') {
	console.log("It's winter! Everything is covered in snow.");
} else if (season === 'fall') {
	console.log("It's fall! Leaves are falling!");
} else if (season === 'summer') {
	console.log("It's sunny and warm because it's summer!");
} else {
	console.log('Invalid season.');
}
