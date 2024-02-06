// 1.Linear Search

// Menggunakan For Loop
// function cariAngka(array, angka) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === angka) {
//       return angka;
//     }
//   }
//   return "undefined";
// }

// let arr = [2, 6, 7, 4, 1];
// let hasilPencarian = cariAngka(arr, 4);
// console.log(hasilPencarian);

// Menggunakan Map
function cariAngka(array, angka) {
  let hasilPencarian = array.map((item) => {
    if (item === angka) {
      return angka;
    }
  });

  return hasilPencarian.includes(angka) ? angka : "undefined";
}

let arr = [2, 6, 7, 4, 1];
let hasilPencarian = cariAngka(arr, 4);
console.log(hasilPencarian);

// 2.Fizz Buzz Array

//Menggunakn For loop
function fizzBuzz(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      result[i] = "FizzBuzz";
    } else if (arr[i] % 3 === 0) {
      result[i] = "Fizz";
    } else if (arr[i] % 5 === 0) {
      result[i] = "Buzz";
    } else {
      result[i] = arr[i].toString();
    }
  }
  return result;
}

console.log(fizzBuzz([8, 3, 9, 2, 5]));

// Mengembalikan Fungsi Bollean
function fizzBuzzBollean(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      result[i] = true;
    } else {
      result[i] = false;
    }
  }
  return result;
}

console.log(fizzBuzzBollean([4, 5, 9, 15, 19]));

//Menggunakan Map

function fizzBuzz(arr) {
  return arr.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return "FizzBuzz";
    } else if (num % 3 === 0) {
      return "Fizz";
    } else if (num % 5 === 0) {
      return "Buzz";
    } else {
      return num.toString();
    }
  });
}

console.log(fizzBuzz([8, 3, 9, 2, 5]));

// Mengembalikan Fungsi Bollean
function fizzBuzzBollean(arr) {
  return arr.map((num) => num % 3 === 0 && num % 5 === 0);
}

console.log(fizzBuzzBollean([4, 5, 9, 15, 19]));
