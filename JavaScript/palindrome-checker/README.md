## Problem❓:

Return `true` if the given string is a palindrome. Otherwise, return `false`.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all **non-alphanumeric characters** (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as `racecar`, `RaceCar`, and `race CAR` among others.

We'll also pass strings with special symbols, such as `2A3*3a2`, `2A3 3a2`, and `2_A3*3#A2`.



## My Solution💡:

So, the way I solved it is like this:
1. Make all the string lowercase
2. Remove all the special symbols
3. Reverse the string, and compare it with the main string
4. Return the result


So, I came up with this:
```javascript
function palindrome(str) {
  const arrstr = str.toLowerCase().replace(/[!@#$%^&*()_+{}\[\]:;<>,.?\\\/\|=~-\s]/g, "").split("")
  const sndstr = [...arrstr].reverse().join("")
  const mainstr = arrstr.join("")
  return sndstr == mainstr
}
```
`arrstr` is to store the string that are doesn't have any special character(using `replace(/[!@#$%^&*()_+{}\[\]:;<>,.?\\\/\|=~-\s]/g, "")` to replace alll the special symbols with blank(`""`)) and lowercased(using `toLowerCase`). And then I use `split()` to separate all the letter and turn the stirng into an array of letter so the string can be reverse. using `sndstr` to store the reversed string using `reverse()` to reverse the string and join them using `join("")`. And then compare `sndstr` with `mainstr` that contain the original string without space and special symbols.


Here are some of the example usage:

```javascript
console.log(palindrome("eye"));//Output true
console.log(palindrome("five|\_/|four"));//Output false
console.log(palindrome("never odd or even"));//Output true
```


## Feedback💬:

I welcome any feedback, suggestions, or improvements to make this solution more efficient and readable. Please feel free to share your thoughts! :smile:
