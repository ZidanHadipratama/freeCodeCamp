function dropElements(arr, func) {
  let test = false;
  let newarr = [];
  for (let i=0;i<arr.length;i++){
    if (func(arr[i]) | test){
      newarr.push(arr[i])
      test = true
    }
  }
  return newarr
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));//Output [ 1, 2, 3 ]
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}))//Output [ 1, 0, 1 ]
