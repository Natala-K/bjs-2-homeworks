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

	let a = 100;
	let percent = a / 100;
	let p = 0.12;
	let n = 0;
	let creditBody = amount - contribution;
	let countMonths = creditBody * (p + (p / (((1 + p) ** n) - 1)));
	let result = n * countMonths;

	return result;
}