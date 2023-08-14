## Problem❓:

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.



## My Solution💡:

It's hard to explain, I'm sorry: 
```javascript
function convertToRoman(num) {
  const newnum = String(num).split("").map(Number)
  const roman = [];
  const satuan = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX"
  };
  const puluhan = {
    1: "X",
    4: "XL",
    5: "L",
    9: "XC"
  };
  const ratusan = {
    1: "C",
    4: "CD",
    5: "D",
    9: "CM"
  };
  const ribuan = {
    1: "M"
  }
  const mode = [
    satuan, puluhan, ratusan, ribuan
  ]
  let n = 0;
  for (let i = newnum.length-1;0<=i;i--){
    if (mode[n]==ribuan){
      roman.unshift(mode[n][1].repeat(newnum[i]))
    }else{
      if (newnum[i]<4){
        roman.unshift(mode[n][1].repeat(newnum[i]))
      }else if(newnum[i] > 5 && newnum[i] < 9){
        roman.unshift(mode[n][5]+(mode[n][1].repeat(newnum[i]-5)))
      }else{
        roman.unshift(mode[n][newnum[i]])
      }
    }
    n++
  }
  return roman.join("").trim()
}
```


Here are some of the example usage:

```javascript
console.log(convertToRoman(36));//Output XXXVI
console.log(convertToRoman(649));//Output DCXLIX
console.log(convertToRoman(3999)); //Output MMMCMXCIX
```


## Feedback💬:

I welcome any feedback, suggestions, or improvements to make this solution more efficient and readable. Please feel free to share your thoughts! :smile:
