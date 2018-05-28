function lunch() {
	var choice = prompt("What do you want for lunch?","Type your lunch choice here").toUpperCase();

	if (choice === 'SOUP'){
		alert("Delicious! Tomato's my favorite.");
	} else if (choice === 'PASTA') {
	    alert("Great, we have fettucini carbonara!");
	} else {
		alert("Sorry, I didn't understand that.");
	}

}

document.getElementById("lunch").onclick = lunch;