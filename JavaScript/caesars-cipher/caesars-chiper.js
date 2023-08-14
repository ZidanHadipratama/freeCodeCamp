function rot13(str) {
  const alphabetShift = {
  A: 'N', B: 'O', C: 'P', D: 'Q', E: 'R', F: 'S', G: 'T', H: 'U', I: 'V', J: 'W', K: 'X', L: 'Y', M: 'Z',
  N: 'A', O: 'B', P: 'C', Q: 'D', R: 'E', S: 'F', T: 'G', U: 'H', V: 'I', W: 'J', X: 'K', Y: 'L', Z: 'M',
  a: 'n', b: 'o', c: 'p', d: 'q', e: 'r', f: 's', g: 't', h: 'u', i: 'v', j: 'w', k: 'x', l: 'y', m: 'z',
  n: 'a', o: 'b', p: 'c', q: 'd', r: 'e', s: 'f', t: 'g', u: 'h', v: 'i', w: 'j', x: 'k', y: 'l', z: 'm',
  '!': '!', '@': '@', '#': '#', '$': '$', '%': '%', '^': '^', '&': '&', '*': '*', '(': '(', ')': ')',
  '_': '_', '+': '+', '{': '{', '}': '}', '[': '[', ']': ']', ':': ':', ';': ';', '<': '<', '>': '>',
  ',': ',', '.': '.', '?': '?', '/': '/', '|': '|', '=': '=', '~': '~', " ":" "
};
  return str.split("").map(item => {return alphabetShift[item]}).join("")
}

console.log(rot13("SERR PBQR PNZC"));//Output FREE CODE CAMP
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))//Output THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.