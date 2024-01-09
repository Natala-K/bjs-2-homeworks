


function getArrayParams(...arr) {

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

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
 
let average = sum(arr) / 3;

return { min: min, max: max, average: avg };
}








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
