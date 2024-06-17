function randomArr() {
  const arr = [];
  for (i = 1; i <= 5; i++) {
    let rand = Math.floor(Math.random() * (300 - 10 + 1)) + 10;
    arr.push(rand);
  }

  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
}

function arrCutNumber(n=1) {
  const arr = [];
  while (arr.length != 3) {
    let rand = Math.floor(Math.random() * 3) + 1;
    if (rand == n) {
      continue;
    }
    arr.push(rand);
  }

  return arr;
}