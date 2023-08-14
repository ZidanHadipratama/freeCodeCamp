## Problem❓:

Given the array `arr`, iterate through and remove each element starting from the first element (the 0 index) until the function `func` returns `true` when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, `arr` should be returned as an empty array.



## My Solution💡:

So, the way I think to solve it is like this:
1. Iterate through the array until find that return `true` from the `func(arr[i]))`, and then take the `arr[i]`
2. After that, no matter how the `func()` return, take the `arr[i]`

So with that, I came up with this:
```javascript
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
```
So, `test` i kinda act like a switch, when `func(n)` return `true`, then `test` become `true`. 
So, no matter what `func(n)` will return, it will still add `arr[i]` to `newarr`

Here are some of the example usage:

```javascript
console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));//Output [ 1, 2, 3 ]
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}))//Output [ 1, 0, 1 ]
```


## Feedback💬:

I welcome any feedback, suggestions, or improvements to make this solution more efficient and readable. Please feel free to share your thoughts! :smile:
