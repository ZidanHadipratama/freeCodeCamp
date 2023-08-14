## Problem❓:

Return an English translated sentence of the passed binary string.

The binary string will be space separated.



## My Solution💡:

So, the way I solved it is like this:
1. Split the string to become an array.
2. Iterate through the item inside the string, and convert it to letter.
3. Join them and return it.

The problem is, how to change bianry to letter?. Gladly javascript have a function for that. With `String.fromCharCode(num)` it will convert from num to letter. 
And with `parseInt(binary, base)` can convert binary code to num. With that, we can combine it to become `String.fromCharCode(parseInt(binary, 2)`. We take `base` 2 because because it's binary.

So, I came up with this:
```javascript
function binaryAgent(str) {
  let newstr = str.split(" ");
  for (let i=0;i<newstr.length;i++){
    newstr[i] = String.fromCharCode(parseInt(newstr[i], 2));
  }
  let newnewstr = newstr.join("")
  return newnewstr;
}
```
`newstr` is to stire the array of splitted `str`. The `for` loops is to iterate through `newstr` array and convert it to letter. 
`newnewstr` is to store the `newstr` after it have been combined.


Here are some of the example usage:

```javascript
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");//Output "Aren't bonfires fun!?"
```


## Feedback💬:

I welcome any feedback, suggestions, or improvements to make this solution more efficient and readable. Please feel free to share your thoughts! :smile:
