function steamrollArray(arr) {
  let newarr = [];
  for (let i=0;i<arr.length;i++){
    if (Array.isArray(arr[i])){
      newarr.push(...steamrollArray(arr[i]))
    }else{
      newarr.push(arr[i])
    }
  }
  return newarr
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));//Output [1, 2, 3, 4]
