## Problem❓:

Make a Person

Fill in the object constructor with the following methods below:
```javascript
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(first, last)
```
Run the tests to see the expected output for each method. These methods must be the only available means of interacting with the object. Each test will declare a new `Person` instance as `new Person('Bob', 'Ross')`.



## My Solution💡:

So, I think it's pretty straight forward. You just make an object with a bunch of function:
```javascript
const Person = function(first, last) {
  let firstName = first
  let lastName = last
  this.getFullName = function() {
    return firstName + " " + lastName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.getFirstName = function() {
    return firstName;
  };
  this.setFullName = function(a, b){
    firstName = a
    lastName = b
  };
  this.setFirstName = function(a){
    firstName = a
  }
  this.setLastName = function(b){
    lastName = b
  }
  return "";
};
```



## Feedback💬:

I welcome any feedback, suggestions, or improvements to make this solution more efficient and readable. Please feel free to share your thoughts! :smile:
