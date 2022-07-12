// 1.Change the value of wordCount so that it is truthy. This value should still be a number.After you make this change and run your code, 'Great! You've started your work!' should log to the console.

// 2.Change the value of favoritePhrase so that it is still a string but falsy. After you make this change and run your code, 'This string is definitely empty.' should log to the console.

let wordCount = 5;

if (wordCount) {
	console.log("Great! You've started your work!");
} else {
	console.log('Better get to work!');
}

let favoritePhrase = '';

if (favoritePhrase) {
	console.log("This string doesn't seem to be empty.");
} else {
	console.log('This string is definitely empty.');
}

// Let’s use short-circuit evaluation to assign a value to writingUtensil. Do not edit tool yet, we’ll return to tool in the next step.Assign to writingUtensil the value of tool and if tool is falsy, assign a default value of 'pen'.

let tool = '';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

//Notice that text 'The pen is mightier than the sword' logged to the console. Which means the value of writingUtensil is 'pen'. What if we reassign the value of tool to 'marker'. Let’s see what happens to the value of writingUtensil.

let tool2 = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil2 = tool2 || 'pen';

console.log(`The ${writingUtensil2} is mightier than the sword.`);

// Ternary Operator
// In the spirit of using short-hand syntax, we can use a ternary operator to simplify an if...else statement.
// Take a look at the if...else statement example:

// let isNightTime = true;
// if (isNightTime) {
//   console.log('Turn on the lights!');
// } else {
//   console.log('Turn off the lights!');
// }

// We can use a ternary operator to perform the same functionality:

// isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

let isLocked = false;

isLocked
	? console.log('You will need a key to open the door.')
	: console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase2 = 'Love That!';

favoritePhrase2 === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");
