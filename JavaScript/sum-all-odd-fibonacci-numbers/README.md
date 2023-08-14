## Problem❓:

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.



## My Solution💡:

Okay, so before I got enlightment 💡, the way I solved it is like this:
1. Make a fibonacci sequence until before `num`
2. Then iterate through it to find which one is odd
3. Sum all the odd one, and return it.

So I came up with this:
```javascript
function sumFibs(num) {
  let fibo = [0, 1];
  let ftf = true
  let i = 2;
  while (ftf){
    const fibonew = fibo[i-1] + fibo[i-2];
    if (fibonew<=num){
      fibo.push(fibonew)
      i++;
    }else{
      ftf = false;
    }
  }
  let sum = 0
  for (let i=0;i<fibo.length;i++){
    if (fibo[i]%2 != 0){
      sum += fibo[i]
    }
  }
  return sum
}
```
`let fibo` for storing all the fibonacci sequence. `let ftf` to become a switch for turning of the `while` loops. `let i` to count the index for the `fibo` array.
The `while` loops is to make the fibonacci sequence. `let sum` to store the sum of all the odd fibonacci numbers. The `for` loops to summing all the odd fibonacci numbers.

But then I asked myself, "is this code effective?", after I ask ChatGPT, it came up with this:
```javascript
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
```
Which is, really smart (it's ChatGPt after all). With this code, we doesn;t need to store all the fibonacci sequence. 
And instead of 2 loops, we can just use 1 loops and count the sum at the same time. It's faster and easier to understand.

At this rate, we are really gonna be replaced by AI.

Here are some of the example usage:

```javascript
console.log(sumFibs(4)); //Output 5
console.log(sumFibs(75025)); //Output 135721
```


## Feedback💬:

I welcome any feedback, suggestions, or improvements to make this solution more efficient and readable. Please feel free to share your thoughts! :smile:
