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