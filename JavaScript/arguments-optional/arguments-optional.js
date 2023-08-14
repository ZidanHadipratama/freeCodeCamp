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

console.log(addTogether(5, undefined))//Output undefined
console.log(addTogether(23, 30))//Output 53
console.log(addTogether(5))//Output [Function: addMore]
console.log(addTogether(5)(7))//Output 12