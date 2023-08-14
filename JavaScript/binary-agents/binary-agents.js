function binaryAgent(str) {
  let newstr = str.split(" ");
  for (let i=0;i<newstr.length;i++){
    newstr[i] = String.fromCharCode(parseInt(newstr[i], 2));
  }
  let newnewstr = newstr.join("")
  return newnewstr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");//Output "Aren't bonfires fun!?"
