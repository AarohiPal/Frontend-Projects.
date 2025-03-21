<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>PROJECT 1</title>
	<style type="text/css">
		div{
			margin: 20px;
			padding: 25PX;
			color: white;
			background-color: #3AAFA9;
			width: 40%;
			border: inset blue 8px;
			
		}
		h1{
			color: blue;
			font-weight:underline ;
		}
		button{
			padding: 10px;
			margin: 10px;
			color: blue;
			width: 110px;
			font-weight: bold;
		}
		span{
			color: black;
		}

	</style>
</head>
<body>
	<h1>Rock Paper Scissors Game</h1>
	<h2>Computer Choice:  <span id="computer-choice"></span></h2>
	<h2>User Choice:  <span id="user-choice"></span></h2>
	<h2>Result:  <span id="results"></span></h2>
	<button id="rock" onclick="choose('ROCK')">ROCK</button>
	<button id="paper" onclick="choose('PAPER')">PAPER</button>
	<button id="scissors" onclick="choose('SCISSOR')">SCISSOR</button>

	<h2>User Score: <span id="score"></span> </h2>
</div>

<script type="text/javascript">
	var computerChoice = document.getElementById("computer-choice");
	var user= document.getElementById("user-choice");
	var result = document.getElementById("results");
	function choose(e) {
		user.innerHTML=e.toUpperCase();
		generateCompChoice();
		generateResult();
	}


	function generateCompChoice(){

		let ramNum=(Math.floor(Math.random()*3));
		console.log(ramNum);

		if(ramNum === 0)
			computerChoice.innerHTML = "ROCK";

		if(ramNum ===1)
			computerChoice.innerHTML = "PAPER";

		if(ramNum ===2)
			computerChoice.innerHTML= "SCISSORS";

		console.log(ramNum);

	}

	function generateResult() {
		const user1 = user.innerHTML;
		const computer = computerChoice.innerHTML;
		

		if (computer===user1){

			result.innerHTML= "It is a draw";
			console.log("draw");
		}
		else if ((user1 === "ROCK" && computer === "SCISSOR") ||
				   (user1 === "PAPER" && computer === "ROCK") ||
				   (user1 === "SCISSOR" && computer === "PAPER")){

			result.innerHTML = "You Win!";
					

		} 
		else {
			result.innerHTML = "You Lose!";
			
		}

				
	}
</script>


</body>
</html>