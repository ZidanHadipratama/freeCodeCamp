function uniteUnique(arr) {
  let ray = []
  for (let i=0;i<arguments.length;i++){
    ray.push(...arguments[i])
  }
  let ray2 = [...new Set(ray)]
  return ray2;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); //Output [1, 3, 2, 5, 4]
uniteUnique([1, 2, 3], [5, 2, 1]); //Output [1, 2, 3, 5]
uniteUnique([1, 3, 2], [5, 4], [5, 6]); //Output [1, 3, 2, 5, 4, 6]
