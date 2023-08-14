// function sumFibs(num) {
//   let fibo = [0, 1];
//   let ftf = true
//   let i = 2;
//   while (ftf){
//     const fibonew = fibo[i-1] + fibo[i-2];
//     if (fibonew<=num){
//       fibo.push(fibonew)
//       i++;
//     }else{
//       ftf = false;
//     }
//   }
//   let sum = 0
//   for (let i=0;i<fibo.length;i++){
//     if (fibo[i]%2 != 0){
//       sum += fibo[i]
//     }
//   }
//   return sum
// }

function sumFibs(num) {
  let bfr = 0;
  let afr = 1;
  let sum = 0;

  while (afr<=num){
    if (afr%2 != 0){
      sum += afr
    }
    let newafr = bfr + afr
    bfr = afr
    afr = newafr
  }

  return sum
}




sumFibs(4); //Output 5
sumFibs(75025); //Output 135721
