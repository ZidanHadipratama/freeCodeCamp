## Problem❓:

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.


## My Solution💡:

So, the way I solve it is like this:
1. Sort the array.
2. find the Least Common Multiple (LCM) between `arr[0]` and `arr[0]+1`.
3. After found the LCM of `arr[0]` and a`rr[0]+1` (let's say it's `a`), find the LCM between `a` and `arr[0]+2`.
4. Repeat with the + number increase ever time until `arr[0]+i` <= `arr[1]`.
5. Return the LCM.

To find LCM of between two number or more, we need to find the GCD (Greatest Common Divisble) first.
To find GCD between 2 numbers is like this:
Let's say the number is 5 and 2.
5%2 = 1
and then take the 2 and mod it with the 1.
2%1 = 0
because 2%1 equal to zero, then the GCD for 5 & 2 is 1.
And to find the LCM is using this equations:
LCM = (a*b)/GCD.
LCM of 5 & 2 = (5*2)/1 = 10. 

So, with that, I came up with this:
```javascript
function smallestCommons(arr) {
  arr.sort((a,b)=>a-b);
  let lcm = arr[0];
  for(let i=1;arr[0]+i<=arr[1];i++){
    let gcd = 0;
    let a = arr[0]+i;
    let b = lcm;
    let sisa = a%b; 
    while (sisa>0){
      a = b;
      b = sisa;
      sisa = a%b;
    }
    gcd = b;
    lcm = ((arr[0]+i) * lcm)/gcd;
  }
  return lcm
}
```
`arr.sort((a,b) => a-b)` to sort the array. `let lcm` to store the LCM. The `for` loops is to iterate `arr[0]+1`, `arr[0]+2`, and so on until `arr[1]`.
`let gcd` to store the GCD. `let a` is for the first number for finding the GCD, `let b` is for the second number, and  `let sisa` is to store the mod of `a` and `b`. 
The `while` loops is to find the GCD of `a` and `b` and store all the value oustide the loops.

Here are some of the example usage:

```javascript
console.log(smallestCommons([2, 10])); //Output 2520
```


## Feedback💬:

I welcome any feedback, suggestions, or improvements to make this solution more efficient and readable. Please feel free to share your thoughts! :smile:
