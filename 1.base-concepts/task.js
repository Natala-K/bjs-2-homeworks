"use strict"

function solveEquation(a, b, c) {

	let d = b ** 2 - 4 * a * c
	let arr = [];

	if (d == 0) {

		let x0 = (-b / (2 * a));
		arr.push(x0);

	} else if (d > 0) {

		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);

	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	let convertedPercent = (percent / 100) / 12;
	let creditBody = amount - contribution;
	let monthPayment = creditBody * (convertedPercent + (convertedPercent / (((1 + convertedPercent) ** countMonths) - 1)));
	let totalPayment = monthPayment * countMonths;

	return Number(totalPayment.toFixed(2))

}