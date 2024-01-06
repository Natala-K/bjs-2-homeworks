let min = Infinity;
let max = -Infinity;
let sum = 0;


function getArrayParams(...arr) {

 for(let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i]
  } 
}

  for(let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i]
  }
 }
}

let avg = arr[i] + sum;
return { min: min, max: max, avg: avg };

getArrayParams(9, 99, 1)





function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
