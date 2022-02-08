var scores,roundScore,activePlayer,gamePlaying;
Initatlising();
document.querySelector(".btn--roll").addEventListener("click",function(){
  if(gamePlaying){
  //1.Random number
   var dice=Math.floor(Math.random()*6)+1;
  //2.Display
  var diceDom=document.querySelector(".dice");
  diceDom.style.display="block";
  diceDom.src="dice-" +dice+ ".png";
  if(dice===6&&previousdice===6){
    scores[activePlayer]=0;
    document.querySelector("#score--"+activePlayer).textContent=scores[activePlayer];
    nextPLayer();
  }
  else if(dice!==1){
    roundScore+=dice;
    document.querySelector("#current--"+activePlayer).textContent=roundScore;
  }
  else{
   nextPLayer();
  }
  previousdice=dice;
}
});

document.querySelector(".btn--hold").addEventListener("click",function(){
  if(gamePlaying){
  // Add Current Score
  scores[activePlayer]+=roundScore;
    // Update the UI
  document.getElementById("score--"+activePlayer).textContent=scores[activePlayer];
  var input=document.querySelector(".final_score").value;
  console.log(input);
  // Check if PLayer won the game or not
  if(scores[activePlayer]>=20){
    document.querySelector("#name--"+activePlayer).textContent="Winner";
    document.querySelector(".dice").style.display="none";
    document.querySelector(".player--"+activePlayer).classList.add("player--winner");
    gamePlaying=false;
  }
  else{
    nextPLayer();
  }
}
});

function nextPLayer(){
  activePlayer===0?activePlayer=1:activePlayer=0;
  roundScore=0;
  document.querySelector("#current--0").textContent="0";
  document.querySelector("#current--1").textContent="0";
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
  document.querySelector(".dice").style.display="none";
}

document.querySelector(".btn--new").addEventListener("click",function(){
Initatlising();
});
function Initatlising(){scores=[0,0];
 roundScore=0;
 activePlayer=0;
 gamePlaying=true;
document.querySelector(".dice").style.display="none";
document.getElementById("score--0").textContent="0";
document.getElementById("score--1").textContent="0";
document.getElementById("current--0").textContent="0";
document.getElementById("current--1").textContent="0";
document.querySelector("#name--0").textContent="Player 1";
document.querySelector("#name--1").textContent="Player 2";
document.querySelector(".player--0").classList.remove("player--winner");
document.querySelector(".player--1").classList.remove("player--winner");
document.querySelector(".player--0").classList.remove("player--active");
document.querySelector(".player--1").classList.remove("player--active");
document.querySelector(".player--0").classList.add("player--active");
}
// var dice=Math.floor(Math.random()*6)+1;
