// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 *    counter1 returns a function, whereas counter2 just returns the count plus 1
 *    counter 2 has its count variable defined outside of the function 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 *    counter1 uses closure, this is because it returns a function that has access to the variable 'count' above
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 *    counter1 would be more preferable because you could define count in that function and still have the ability to use count in a differnt function
 *    
 *    counter2 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

console.log(count)


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

    let randomNum = Math.floor(Math.random() * 3)
    return randomNum;

}

console.log("task 2:", inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(numInnings, inningFunction){

  let homeTeam = 0;
  let awayTeam = 0;

  for(let i = 0; i<numInnings; i++) {
    homeTeam = homeTeam + inningFunction();
    awayTeam = awayTeam + inningFunction();
  }
  return {'Home': homeTeam, 'Away': awayTeam};
}

console.log('task3:', finalScore(9, inning));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */



                  // finalScore,    inning, "number"
// function scoreboard(getInningScore, inning, numInnings) {
//   for(let i = 0; i<numInnings; i++ ) {
//     let inningCount = i;
//     console.log(inningCount);
//   }



// }



function scoreboard(numInnings, inningScoreFunction, inningFunction) {
  const results=[]
  const final = {"Home": 0, "Away": 0}
  for(let i = 0; i < numInnings; i++){
    const obj = Object.assign({"inning": i+1}, inningScoreFunction(1, inningFunction))
    final["Home"] += obj.Home;
    final["Away"] += obj.Away;

    
    results.push(`Inning ${obj.inning}: ${obj.Away} - ${obj.Home}`)
  }
  results.push(`Final Score: ${final.Away} - ${final.Home}`)
  return results;
  
  
}

console.log(scoreboard(9,finalScore, inning))


