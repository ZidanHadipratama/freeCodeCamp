## Problem❓:

Flatten a nested array. You must account for varying levels of nesting.


## My Solution💡:

So, the way I solved it is like this:
1. Iterate through the array.
2. Check if the item inside the array is an array or not.
3. If the item is not an array, add the item to a new array. If not, iterate inside the array and return that item inside thea array.
4. return the new array.

So, I came up with this:
```javascript
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
```
First, I search is there a thing where can I check is the item is an array or not, and I found `Array.isArray` function. 
With that I can just iterate through the array, if the item inside the array is function, I use `stemrollArray` again on that item to iterat through the array and return that array.
Than the returned array get spread out using `...` to remove the bracket(`[]`).

Here are some of the example usage:

```javascript
console.log(steamrollArray([1, [2], [3, [[4]]]]));//Output [1, 2,3, 4]
```


## Feedback💬:

I welcome any feedback, suggestions, or improvements to make this solution more efficient and readable. Please feel free to share your thoughts! :smile:
