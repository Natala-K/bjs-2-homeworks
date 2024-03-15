
function getArrayParams(...arr) {

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
     max = arr[i]
    }
   
    sum +=arr[i]; 
  }
 
  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
  
}


function summElementsWorker(...arr) {

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
  sum +=arr[i];
}

return (sum)
}



function differenceMaxMinWorker(...arr) {

  let min = Infinity;
  let max = -Infinity;
 

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] < min) {
      min = arr[i];
    };

    if (arr[i] > max) {
      max = arr[i]
     }

  }
  if (arr.length == 0) {
    return 0;
  }


  let difference = max - min;
  return (difference)

}



function differenceEvenOddWorker(...arr) {

  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2==0) {
      sumEvenElement +=arr[i];     
    }

    else {
      sumOddElement +=arr[i];    
    }
  
  }
  let difference = sumEvenElement - sumOddElement; 
  return (difference)
  
  }


function averageEvenElementsWorker(...arr) {

let sumEvenElement = 0;
let countEvenElement = 0;

for (let i = 0; i < arr.length; i++) {

  if (arr[i] % 2==0) {
    sumEvenElement +=arr[i]; 
    countEvenElement +=1;
  }

}

if (arr.length == 0) {
  return 0;
}

 let result = sumEvenElement / countEvenElement;
 return (result)

 }


 function makeWork(arrOfArr, func) {

  let maxWorkerResult = -Infinity;

  const arr2 = [];

  for (let i = 0; i < arrOfArr.length; i++) {
  arr2.push(func(...arrOfArr[i]));

  if (arr2[i] > maxWorkerResult) {
    maxWorkerResult = arr2[i];
   }
}
 

return (maxWorkerResult);

 }