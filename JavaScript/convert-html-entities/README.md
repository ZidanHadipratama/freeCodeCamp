## Problem❓:

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


## My Solution💡:

Okay, so the way I do it:
1. List all the item that are need to be converted
2. Split the string, and then search the item that are need to be replaced
3. Replace the string, and then join them all

So I came up with this:
```javascript
function convertHTML(str) {
  const convert = {
    "&" : "&amp;",
    "<" : "&lt;",
    ">" : "&gt;",
    '"' : "&quot;",
    "'" : "&apos;"
  }

  let newstr = str.split("")
  for (let i=0;i<newstr.length;i++){
    if (convert.hasOwnProperty(newstr[i])){
      newstr[i] = convert[newstr[i]]
    } 
  }

  return newstr.join("")
}
```
`convert` to store all the things that are needed to be converte. `newstr` to store all the splitted string. 
Inside the `for` loops, using `convert.hasOwnProperty(newstr[i])` to check if `newstr[i]` is inside `convert`, if yes, then it will be replaced with the key. And then with `join` to join all of them

Here are some of the example usage:

```javascript
convertHTML("Dolce & Gabbana"); //Output Dolce &amp; Gabbana
convertHTML("Sixty > twelve"); //Output Sixty &gt; twelve
convertHTML('Stuff in "quotation marks"'); //Output Stuff in &quot;quotation marks&quot;
```


## Feedback💬:

I welcome any feedback, suggestions, or improvements to make this solution more efficient and readable. Please feel free to share your thoughts! :smile:
