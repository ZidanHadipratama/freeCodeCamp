## Problem❓:

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, `addTogether(2, 3)` should return `5`, and `addTogether(2)` should return a function.

Calling this returned function with a single argument will then return the sum:

```javascript
var sumTwoAnd = addTogether(2);
```

`sumTwoAnd(3)` returns `5`.

If either argument isn't a valid number, return undefined.




## My Solution💡:

So, the way I solved it is like this:
1. Check all the arguments, it is a number or not?
2. If the arguments.length == 2, return the sum of it
3. Else return a function
4. Inside the function, there ia also a check to know if the arguments is number or not
5. If it is a number, return sum of the arguments form the outer function and the arguments form innerfunction
The problem I face is how to give the argument from the outer function to the inner function. 

After some research, I came up with this:
```javascript
function addTogether() {
  for (let i=0;i<arguments.length;i++){
    if (typeof arguments[i] !== "number"){
      return undefined
    }
  }
  if (arguments.length == 2){
    return arguments[0] + arguments[1]
  }
  else{
    const num = arguments[0]
    return function addMore(){
      if (typeof arguments[0] !== "number"){
        return undefined
      }else{
        return num + arguments[0]
      }
    }
  }
}
```
Let me explain:
```javascript
for (let i=0;i<arguments.length;i++){
    if (typeof arguments[i] !== "number"){
      return undefined
    }
  }
```
This part is to check wether the arguments is number or not.

```javascript
if (arguments.length == 2){
    return arguments[0] + arguments[1]
}
```
If the arguments is a number and if there is 2 arguments exactly, this part will run and it will return the sum of the arguments.

```javascript
else{
    const num = arguments[0]
    return function addMore(){
      if (typeof arguments[0] !== "number"){
        return undefined
      }else{
        return num + arguments[0]
      }
    }
}
```
This part if the argument from `addTogether()` is only one. To pass the argument from `addTogether` function to `addMore` function is to store the argument from the `addTogether` in a variabel, I use varibel `num` in my case. After that, we can use `num` to be summed with the argument from `addMore`.


Here are some of the example usage:

```javascript
console.log(addTogether(5, undefined))//Output undefined
console.log(addTogether(23, 30))//Output 53
console.log(addTogether(5))//Output [Function: addMore]
console.log(addTogether(5)(7))//Output 12
```


## Feedback💬:

I welcome any feedback, suggestions, or improvements to make this solution more efficient and readable. Please feel free to share your thoughts! :smile:
