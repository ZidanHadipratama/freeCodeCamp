function translatePigLatin(str) {
  let vowel = /[aiueo]/.test(str[0]);
  let totcon = 0;
  if (vowel){
    return str+"way"
  }
  for (let i=0;i<str.length;i++){
    if (!/[aiueo]/.test(str[i])){
        totcon+=1;
    }else{
      break
    }
  }return str.slice(totcon) + str.slice(0, totcon) + "ay";
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("rhythm"));
