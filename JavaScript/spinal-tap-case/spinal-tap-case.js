function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}


console.log(spinalCase('This Is Spinal Tap')) //Ouput this-is-spinal-tap
console.log(spinalCase("thisIsSpinalTap")) //Output this-is-spinal-tap
console.log(spinalCase("The_Andy_Griffith_Show")) //Output the-andy-griffith-show
