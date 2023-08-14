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

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));
