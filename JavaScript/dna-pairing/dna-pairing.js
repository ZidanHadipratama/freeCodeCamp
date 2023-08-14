// function pairElement(str) {
//   let dna = []
//   for (let i=0;i<str.length;i++){
//     if (str[i] == "G"){
//       dna.push(["G", "C"]);
//     }else if(str[i] == "C"){
//       dna.push(["C", "G"])
//     }else if(str[i] == "A"){
//       dna.push(["A", "T"])
//     }else if(str[i] == "T"){
//       dna.push(["T", "A"])
//     }
//   }
//   return dna
// }

function pairElement(str) {
  const pair = {
    "G" : "C",
    "C" : "G",
    "A" : "T",
    "T" : "A"
  }

  const dna = []

  for (let i in pair){
    dna.push([i, pair[i]])
  }

  return dna
}

console.log(pairElement("GCG"));
