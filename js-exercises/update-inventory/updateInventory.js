/* eslint-disable no-plusplus */
function updateInventory(arr1, arr2) {
  const curInv = arr1;
  const newInv = arr2;
  let found = false;
  for (let i = 0; i < newInv.length; i++) {
    found = false;
    for (let j = 0; j < curInv.length; j++) {
      if (curInv[j][1] === newInv[i][1]) {
        curInv[j][0] += newInv[i][0];
        found = true;
      }
    }
    if (found === false) {
      curInv.push(newInv[i]);
    }
  }
  curInv.sort((a, b) => (a[1] > b[1] ? 1 : -1));
  return curInv;
}

export {
  updateInventory,
};
