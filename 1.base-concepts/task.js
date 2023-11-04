"use strict"

function solveEquation(a, b, c) {

	let d = b ** -4 * a * c


	if (d < 0) {
		let x1, x2 == [];

	} else if (d == 0) {

		let x1 == (-b / (2 * a));

	} else if (d > 0) {

		let x1 == (-b + Math.sqrt(d)) / (2 * a);
		let x2 == (-b - Math.sqrt(d)) / (2 * a);

	}


	let arr = [a(x - x1)(x - x2)];

	return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}