const array = [5, 42, 31, 3, 75, 54, 82];

function biggestNum(arr) {
  let maxNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (number > maxNumber) {
      maxNumber = number;
    }
  }
  return maxNumber;
}

function smallestNum(arr) {
  let minNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (number < minNumber) {
      minNumber = number;
    }
  }
  return minNumber;
}
console.log(smallestNum(array), biggestNum(array));
