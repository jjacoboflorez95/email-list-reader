const fs = require("fs").promises;

/* 
Examples of how to run with node when you are locate inside the email folder:
node read.js email_list.txt
node read.js email_list2.txt
*/

// Set the script path and the filename.
const scriptPath = process.argv[1];
const filename = process.argv[2];

console.log("Script: ", scriptPath);
console.log("Filaname: ", filename);
console.log("============================================================="); 
// If statement that validates if the users entered a filename to read.
if (!filename) {
	console.error("Error: \nPlease enter a filename to proceed.");
} else {
	fs.readFile(filename, "utf8")
		.then((list) => console.log(list))
		.catch((error) => console.log(error));
}
