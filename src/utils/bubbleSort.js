export function bubbleSort(str) {
  const arrStr = str.split(' ');
  // console.log(arrStr);
  const arr = arrStr.map((value) => {
    const res = value.includes(',') ? value.replace(',', '.') : value;
    return Number.parseFloat(res);
  });
  for (let i = 0; i < arr.length - 1; i++) {
    let wasSwap = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const swap = arr[j];

        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
        wasSwap = true;
      }
    }
    if (!wasSwap) break;
  }

  console.log('Length: ' + arr.length);
  return arr;
}
