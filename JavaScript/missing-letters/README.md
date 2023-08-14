## Problem❓:

Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.


## My Solution💡:

So, pretty straight forward. This the way I solve this:
1. Make a list of the alphabets.
2. Take the first letter of the argument, iterate it through the alphabets list, when I found the same letter, take the index.
3. Then compare from the first letter of the argument to the letter in alphabets that start from that index that I got, repeat it for the length of the argument.
4. If there is skipped letter, return that letter, if not, return `undefined`.

With that, I came up with this:
```javasript
function fearNotLetter(str) {
  let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  let index = 0;
  for (let i=0;i<alpha.length;i++){
    if (str[0] == alpha[i]){
      index = i;
      break;
    }
  }
  for (let i=0;i<str.length;i++){
    if (str[i] != alpha[index]){
      return alpha[index];
    }
    index++
  }
}
```
`let alpha` for storing the alphabets list. `let index` for storing the index. The first `for` loops to get the index of the first letter of the argument(`str`) inside the `alpha` array.
The second `for` loops for compare `alpha[index]` with `str`. I hope you all understand the way I teach it. If not, feel free to reach me 😄

Here are some of the example usage:

```javascript
fearNotLetter("abce"); //Output d
fearNotLetter("abcdefghjklmno"); //Output i
```


## Feedback💬:

I welcome any feedback, suggestions, or improvements to make this solution more efficient and readable. Please feel free to share your thoughts! :smile:
