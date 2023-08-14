## Problem❓:

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

1. First argument is the sentence to perform the search and replace on.
2. Second argument is the word that you will be replacing (before).
3. Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word `Book` with the word `dog`, it should be replaced as `Dog`


## My Solution💡:

So, the way I do it, is like this:
1. Split the sentence, turn it into an array.
2. Check if the `before` argument and `after` argument have the same lowercase of uppercase letter.
3. Iterate the array to find the same word as `before` argument.
4. Replace it with the `after` argument.

So, I came up with this:
```javascript
function myReplace(str, before, after) {
  let sen = str.split(/\s/);
  if (before[0].toUpperCase() == before[0]){
    after = after[0].toUpperCase() + after.slice(1);
  }else{
    after = after[0].toLowerCase() + after.slice(1)
  }
  for (let i=0;i<sen.length;i++){
    if (sen[i] === before){
      sen[i] = after;
      break;
    }
  }return sen.join(" ")
}
```

`str.split(\s)` is to split the sentenc into a bunch of word and then put into an array called `sen` (don't mind the naming of the variabel😄). 
The next `if` is to check whether the first letter of `before` and `after` have the same type of letter (lowercase, or uppercase).
The `for` loop is to iterate the `sen` array and match it with `before` argument, if it is the same, then it will replace the `sen[i]` with the `after` argument.
And `sen.join(" ")` to join the `sen` array with space between it and return the value.

Here are some of the example usage:

```javascript
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); //Output "A quick brown fox leaped over the lazy dog"
myReplace("He is Sleeping on the couch", "Sleeping", "sitting"); //Output "He is Sitting on the couch"
myReplace("I think we should look up there", "up", "Down"); /Output "I think we should look down there"
```


## Feedback💬:

I welcome any feedback, suggestions, or improvements to make this solution more efficient and readable. Please feel free to share your thoughts! :smile:
