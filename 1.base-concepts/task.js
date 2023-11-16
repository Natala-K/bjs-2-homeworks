"use strict"

function solveEquation(a, b, c) {

	let d = b ** 2 - 4 * a * c
	let x1, x2 = [];
	let u = x;
	let arr = [];
	let x0 = (-b / (2 * a));
	let x1 = (-b + Math.sqrt(d)) / (2 * a);
	let x2 = (-b - Math.sqrt(d)) / (2 * a);

	
    if (d == 0) {
		arr.push[x0];

	} else if (d > 0) {

		arr.push(x1, x2);

	}

	return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {

}