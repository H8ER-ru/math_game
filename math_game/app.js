let playing = false;
let score, action, timeRemaining,correctAnswer;


document.getElementById("startReset").onclick =
    function () {
        if(playing== true){

            location.reload();
        }else{

            playing = true;
            score = 0;
            document.getElementById("scoreValue").innerHTML = score;
            Show("timeRemaining");
            document.getElementById("startReset").innerHTML = "Reset Game";
            timeRemaining = 60;
            document.getElementById('timeRemainingValue').innerHTML = timeRemaining;

            Hide("game_over")

            startCountdown();

            //generate a new q&a//

            generateQA();
        }
    };

    for(i=1; i< 5; i++){
        document.getElementById("box" + i).onclick = function () {
  if(playing==true){
      if(this.innerHTML == correctAnswer){
          score++;
          document.getElementById("scoreValue").innerHTML = score;
          Hide("wrong");
          Show("correct");
          setTimeout(function () {
            Hide("correct")
          }, 1000);

          generateQA();

      }else{
          Hide("correct");
          Show("wrong");
          setTimeout(function () {
            Hide("wrong")
          }, 1000)
      }
  }
};
    }

    function startCountdown() {
       action =  setInterval(function () {
       document.getElementById('timeRemainingValue').innerHTML = timeRemaining;
       timeRemaining -=1;
        if(timeRemaining == 0){//gameover//
           stopCountDown();
           Show("game_over");
           document.getElementById("game_over").innerHTML =
               "<p>Game Over</p> <p>Your score is" + score + "</p>";
           Hide("timeRemaining");
           Hide("correct");
           Hide("wrong");
           playing = false;
           document.getElementById("startReset").innerHTML = "Start Game";
        }
       }, 1000)
    }

function stopCountDown() {
    clearInterval(action);
}

function Hide(id) {
    document.getElementById(id).style.display = "none"
}
function Show(id) {
    document.getElementById(id).style.display = "block"
}

function generateQA() {
    let x = 1+ Math.round(9*Math.random());
    let y = 1+ Math.round(9*Math.random());
    let correctPosition = 1+ Math.round(3*Math.random());

    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x +"*" + y;
    document.getElementById("box" + correctPosition).innerHTML = correctAnswer;

    let answers = [correctAnswer];

    for(i=1; i<5; i++){
        if(i !== correctPosition){
            let wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(9*Math.random())) * (1+ Math.round(9*Math.random()));
            }while(answers.indexOf(wrongAnswer) > -1);


            document.getElementById("box" + i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}









