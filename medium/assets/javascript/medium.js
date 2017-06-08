/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function(){

  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function(){

    var teamoneButton = document.querySelector("#teamone-shoot");
    var teamtwoButton = document.querySelector("#teamtwo-shoot");
    var resetCounter = document.querySelector("#num-resets");
    var resetButton = document.querySelector("#reset");
    var teamoneShots = document.querySelector("#teamone-numshots");
    var teamoneGoals = document.querySelector("#teamone-numhits");
    var teamtwoShots = document.querySelector("#teamtwo-numshots");
    var teamtwoGoals = document.querySelector("#teamtwo-numhits");


    teamoneButton.addEventListener("click", function(){
        console.log("shoot1 button clicked");


        var shotsTakenOne = parseInt(teamoneShots.innerHTML)+1;
        teamoneShots.innerHTML = shotsTakenOne;

        var increaseGoalOne = parseInt(teamoneGoals.innerHTML)+1;
        var randomNumber = Math.random();
            console.log(randomNumber);
        if (randomNumber <= 0.5) {
            teamoneGoals.innerHTML = increaseGoalOne;
            document.body.style.backgroundColor = "blue";
        }

    })

    teamtwoButton.addEventListener("click", function(){
        console.log("shoot2 button clicked");

        var shotsTakenTwo = parseInt(teamtwoShots.innerHTML)+1;
        teamtwoShots.innerHTML = shotsTakenTwo;

        var increaseGoalTwo = parseInt(teamtwoGoals.innerHTML)+1;
        var randomNumber = Math.random();
            console.log(randomNumber);
        if (randomNumber <= 0.5) {
            teamtwoGoals.innerHTML = increaseGoalTwo;
            document.body.style.backgroundColor = "red";
        }
    })

    resetButton.addEventListener("click", function(){
        console.log("I say, I say! Did some just reset?!");
        document.body.style.backgroundColor = "white";

        var clearAll = parseInt(resetCounter.innerHTML)+1;
                    resetCounter.innerHTML = clearAll;
                    teamtwoShots.innerHTML = 0;
                    teamtwoGoals.innerHTML = 0;
                    teamoneShots.innerHTML = 0;
                    teamoneGoals.innerHTML = 0;

    })

  })

})();
