## Problem❓:

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate `pre` will be an object property and you need to return `true` if its value is `truthy`. Otherwise, return `false`.

In JavaScript, `truthy` values are values that translate to `true` when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or `[]` notation.




## My Solution💡:

So, the way I solve it is like this:
1. Iterate trough the array of the arguments
2. Check if the value is `falsy`. Return `false` if not `falsy` and `true` if `truthy`.

Values that are considered falsy in javascript are:
1. `false`
2. `0`
3. `''`(empty string)
4. `null`
5. `undefined`
6. `NaN`
All of this will output as `false` if inputed in any place in javascript. for example, the output of `!null` is `true`.

So, I came up with this:
```javascript
function truthCheck(collection, pre) {
  for (const obj of collection){
    if(!obj[pre] || !obj.hasOwnProperty(pre)){
      return false
    }
  }
  return true
}
```
The first `for` loops is to iterate through `collection` array. Then `!obj[pre]` is to check if the value of `pre` in `obj` is `truthy` or `falsy`. `!obj.hasOwnProperty(pre)` is to check if there is `pre` inside of `obj`. 

Here are some of the example usage:

```javascript
truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");//Output false

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name");//Output true

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role")//Output false
```


## Feedback💬:

I welcome any feedback, suggestions, or improvements to make this solution more efficient and readable. Please feel free to share your thoughts! :smile:
