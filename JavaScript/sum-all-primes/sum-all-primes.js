function sumPrimes(num) {
  let sum = 0;
  for (let i=2;i<=num;i++){
    let prime = true
    for (let a=2;a<i;a++){
      if (i%a == 0){
        prime = false;
        break
      }
    }
    if (!prime){
      continue
    }else{
      sum += i;
    }
  }
  return sum;
}

console.log(sumPrimes(10)); //Output 17
console.log(sumPrimes(977));//Output 73156
