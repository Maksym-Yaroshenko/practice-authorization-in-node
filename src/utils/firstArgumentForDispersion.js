// src/utils/firstArgumentForDispersion.js

export const firstArgumentForDispersion = (arr) => {
  if (arr === undefined || arr === 0) return null;

  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i] ** 2;
  }

  return total / arr.length;
};

// console.log(firstArgumentForDispersion([1, 2, 3]));
