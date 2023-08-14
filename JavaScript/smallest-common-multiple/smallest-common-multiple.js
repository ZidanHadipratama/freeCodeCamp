function smallestCommons(arr) {
  arr.sort((a,b)=>a-b);
  let lcm = arr[0];
  for(let i=0;arr[0]+i+1<=arr[1];i++){
    let gcd = 0;
    let a = arr[0]+i+1;
    let b = lcm;
    let sisa = a%b; 
    while (sisa>0){
      a = b;
      b = sisa;
      sisa = a%b;
    }
    gcd = b;
    lcm = ((arr[0]+i+1) * lcm)/gcd;
  }
  return lcm
}


console.log(smallestCommons([2, 10])); //Output 2520
