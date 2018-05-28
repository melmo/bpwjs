function monsters() {
	var choice1 = prompt("You are walking in the forest, when a monster jumps out. Do you FIGHT, pay or run?","Type your answer here").toUpperCase();

	if (choice1 === "FIGHT") {
		var choice2 = prompt("Are you strong?","Yes or No").toUpperCase();
		if (choice2 === "YES") {
			alert("You beat the monster!");
		} else {
			// What happens next?
		}

	}
}

document.getElementById("monsters").onclick = monsters;