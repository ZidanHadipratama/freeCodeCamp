## Problem❓:

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus `A ↔ N`, `B ↔ O` and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.



## My Solution💡:

So, the way I solved it is like this:
1. Make the object for the caesar cipher
2. Replace the string with the caesar cipher.

Because I'am lazy, I use chatGPT for helping me make the caesar chiper. With that, I came up with this:
```javascript
function rot13(str) {
  const alphabetShift = {
    A: 'N', B: 'O', C: 'P', D: 'Q', E: 'R', F: 'S', G: 'T', H: 'U', I: 'V', J: 'W', K: 'X', L: 'Y', M: 'Z',
    N: 'A', O: 'B', P: 'C', Q: 'D', R: 'E', S: 'F', T: 'G', U: 'H', V: 'I', W: 'J', X: 'K', Y: 'L', Z: 'M',
    a: 'n', b: 'o', c: 'p', d: 'q', e: 'r', f: 's', g: 't', h: 'u', i: 'v', j: 'w', k: 'x', l: 'y', m: 'z',
    n: 'a', o: 'b', p: 'c', q: 'd', r: 'e', s: 'f', t: 'g', u: 'h', v: 'i', w: 'j', x: 'k', y: 'l', z: 'm',
    '!': '!', '@': '@', '#': '#', '$': '$', '%': '%', '^': '^', '&': '&', '*': '*', '(': '(', ')': ')',
    '_': '_', '+': '+', '{': '{', '}': '}', '[': '[', ']': ']', ':': ':', ';': ';', '<': '<', '>': '>',
    ',': ',', '.': '.', '?': '?', '/': '/', '|': '|', '=': '=', '~': '~', " ":" "
    };
  return str.split("").map(item => {return alphabetShift[item]}).join("")
}
```
`alphabetShift` is the object to translate the caesar cipher into a normal human language, or the opposite. 
To replace a string, we need to turn that string into an array(using `split()`), and then we can replace the item in the array(using `map()`). 
And then, we combine the array using `join()` function.

Here are some of the example usage:

```javascript
console.log(rot13("SERR PBQR PNZC"));//Output FREE CODE CAMP
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))//Output THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
```


## Feedback💬:

I welcome any feedback, suggestions, or improvements to make this solution more efficient and readable. Please feel free to share your thoughts! :smile:
