function fearNotLetter(str) {
  let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  let index = 0;
  for (let i=0;i<alpha.length;i++){
    if (str[0] == alpha[i]){
      index = i;
      break;
    }
  }
  for (let i=0;i<str.length;i++){
    if (str[i] != alpha[index]){
      return alpha[index];
    }
    index++
  }
}
