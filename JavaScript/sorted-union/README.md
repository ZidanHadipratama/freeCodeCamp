## Problem❓:

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.


## My Solution💡:

So, the way I think how to solve it is like this:
1. Take all the array, and then combine them.
2. Then erase the double one

The problem I ecounter is to know how many arguments that are gonna be inputed, but gladly javascript has the way to fix it, buy using `arguments`. For example in my code:
```javasript
function uniteUnique(arr) {
  let ray = []
  for (let i=0;i<arguments.length;i++){
    ray.push(...arguments[i])
  }
  let ray2 = [...new Set(ray)]
  return ray2;
}
```
Using `arguments` I can iterate through all the argument and then `push` all the argument to `ray` variabel. And then using `Set` to eliminate all the double item, and store the new array in `ray2`.


Here are some of the example usage:

```javascript
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); //Output [1, 3, 2, 5, 4]
uniteUnique([1, 2, 3], [5, 2, 1]); //Output [1, 2, 3, 5]
uniteUnique([1, 3, 2], [5, 4], [5, 6]); //Output [1, 3, 2, 5, 4, 6]
```


## Feedback💬:

I welcome any feedback, suggestions, or improvements to make this solution more efficient and readable. Please feel free to share your thoughts! :smile:
