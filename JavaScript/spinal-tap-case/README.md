## Problem❓:

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


## My Solution💡:

So, first I need to divide each of the word inside the sentence, and then join them using "-", and then lowercase them. To do that I can use function `split` for splitting them, and then use `join` to join them, and then use `toLowerCase` to lowercase all the letter:

```javascript
function spinalCase(str) {
  return str.split(/\s/).join('-').toLowerCase();
}
```

Using `/\s/` to divide each of the word that space between them. But there is other divider between the word, such as the capital, and the underscore(_). To do fix that, I use some JavaScript RegEx like this:

```javascript
function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}
```

Using `|` are tod use logical  OR expression so that if the divider is not space(`\s`) but it's  underscore(_) than it's still divide the word, and so on. For `?=[A-Z]`, `?=` is how I am understand is 
"take the thing before it", for example if there a word "Program" and then the RegEx is `?=r` then it will output P. So, `?=[A-Z)` will output the thing before letter A-Z.

Here are some of the example usage:

```javascript
spinalCase('This Is Spinal Tap') //Ouput this-is-spinal-tap
spinalCase("thisIsSpinalTap") //Output this-is-spinal-tap
spinalCase("The_Andy_Griffith_Show") //Output the-andy-griffith-show
```


## Feedback💬:

I welcome any feedback, suggestions, or improvements to make this solution more efficient and readable. Please feel free to share your thoughts! :smile:
