var roll = document.querySelector("div");
var die = document.querySelector("button");
var cssClass = ['side1', 'side2', 'side3', 'side4', 'side5', 'side6'];
// die.addEventListener("click", function(e){
// 	roll.classList.toggle("side6");
// });


function randomNumber(){
	return Math.floor(Math.random() * 6);
};

die.addEventListener("click", function(){
	var rng = randomNumber();
	roll.className = "";
	roll.classList.add("" + cssClass[rng]);
	console.log(rng);
});