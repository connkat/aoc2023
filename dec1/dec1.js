const fs = require("fs");

//convert data to array
function readData(fp) {
	const text = fs.readFileSync(fp, "utf-8");
	return (textByLine = text.split("\n"));
}

// const testData = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

function getFirstAndLastNumbers(arr) {
	const numsSanitized = arr.map((str) => str.replace(/[^0-9]/g, ""));

	const twoDigitArray = numsSanitized.map((num) => {
		const first = num[0];
		const last = num[num.length - 1];

		const numStrings = first + last;

		return parseInt(numStrings);
	});

	return twoDigitArray.reduce(function (total, num) {
		return total + num;
	});
}

// console.log(getFirstAndLastNumbers(testData));

// console.log(readData("./dec1-data.txt"));

// console.log(getFirstAndLastNumbers(readData("./dec1-data.txt")));

/// PART 2 ///

const testData2 = [
	"two1nine",
	"eightwothree",
	"abcone2threexyz",
	"xtwone3four",
	"4nineeightseven2",
	"zoneight234",
	"7pqrstsixteen",
];

function convertToInt(arr) {
	//want to use this but it works in order so: eightwothree => eigh23
	// const convertedNums = arr.map((str) =>
	// 	str
	// 		.replace("one", "1")
	// 		.replace("two", "2")
	// 		.replace("three", "3")
	// 		.replace("four", "4")
	// 		.replace("five", "5")
	// 		.replace("six", "6")
	// 		.replace("seven", "7")
	// 		.replace("eight", "8")
	// 		.replace("nine", "9")
	// );
	const numRegex = /(?=(one|two|three|four|five|six|seven|eight|nine|\d))/g;

	const wordToDigit = new Map([
		["one", "1"],
		["two", "2"],
		["three", "3"],
		["four", "4"],
		["five", "5"],
		["six", "6"],
		["seven", "7"],
		["eight", "8"],
		["nine", "9"],
	]);

	// const newNums = getFirstAndLastNumbers(convertedNums);

	return wordToDigit.get(arr[0]) || arr[0];
}

console.log(convertToInt(testData2));
// console.log(convertToInt(readData("./dec1-data.txt")));
