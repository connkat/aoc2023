const fs = require("fs");

//convert data to array
function readData(fp) {
	const text = fs.readFileSync(fp, "utf-8");
	return (textByLine = text.split("\n"));
}

const testData = [
	"two1nine",
	"eightwothree",
	"abcone2threexyz",
	"xtwone3four",
	"4nineeightseven2",
	"zoneight234",
	"7pqrstsixteen",
];


function convertToInt(arr) {
	
	return str
		.replace("one", "1")
		.replace("two", "2")
		.replace("three", "3")
		.replace("four", "4")
		.replace("five", "5")
		.replace("six", "6")
		.replace("seven", "7")
		.replace("eight", "8")
		.replace("nine", "9");
}

console.log(convertToInt("two1nine"));

// console.log(readData("./dec1-data.txt"));

// console.log(getFirstAndLastNumbers(readData("./dec1-data.txt")));
