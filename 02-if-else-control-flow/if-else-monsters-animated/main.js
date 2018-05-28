function monsters() {
	var result = document.getElementById('result');

	var choice1 = prompt("You are walking in the forest, when a monster jumps out. Do you FIGHT, PAY or RUN?","Type your answer here").toUpperCase();

	if (choice1 === "FIGHT") {
		var choice2 = prompt("Are you strong?","Yes or No").toUpperCase();
		if (choice2 === "YES") {
			alert("You beat the monster!");
		} else {
			var choice3 = prompt("Are you smart?","Yes or No").toUpperCase();
			if(choice3 === "YES") {
		      alert("I guess that'll do! You beat the monster - nice work!");
		    } else {
		      result.innerHTML = "You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a monster. You lose!";
		      result.innerHTML +='<img src="img/scary-monster.jpg">';
		      result.style.backgroundColor = "red"; // see more examples at https://www.w3schools.com/jsref/dom_obj_style.asp
		    }
		}

	} else if (choice1 == "PAY") {
		var choice2 = prompt("Are you rich?","Yes or No").toUpperCase();
		if (choice2 === "YES") {
			alert("Well I guess you can afford 100€!");
		} else {
			alert("Too bad! It's human for dinner!")
		}
	} else if (choice1 == "RUN") {
		var choice2 = prompt("Are you fast?","Yes or No").toUpperCase();
		if (choice2 === "YES") {
			alert("Better get your running shoes on then!");
		} else {
			alert("This doesn't end well for you, tiny human!")
		}
	}
}

document.getElementById("monsters").onclick = monsters;