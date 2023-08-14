## Problem❓:


Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input `GCG`, return `[["G", "C"], ["C","G"], ["G", "C"]]`

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


## My Solution💡:

Let's go MONKEY MODE!!!🐒🐒🐒:
```javascript
function pairElement(str) {
  let dna = []
  for (let i=0;i<str.length;i++){
    if (str[i] == "G"){
      dna.push(["G", "C"]);
    }else if(str[i] == "C"){
      dna.push(["C", "G"])
    }else if(str[i] == "A"){
      dna.push(["A", "T"])
    }else if(str[i] == "T"){
      dna.push(["T", "A"])
    }
  }
  return dna
}
```
Well, it's just stright forward, bunch of if else, and it's finish.
BUT!!!, please don't do this. Let's say you got 100 DNA code that are need to be paired, than you probably gonna need 
a 100 more of those if else, which not very good look in the eyes and not look like a professional.
Instead, we can use this:

```javascript
function pairElement(str) {
  const pair = {
    "G" : "C",
    "C" : "G",
    "A" : "T",
    "T" : "A"
  }
  const dna = []
  for (let i=0;i<str.length;i++){
    dna.push([str[i], pair[str[i]]])
  }
  return dna
}
```
With this, the code looking much more better right?, and a lot of people say it's much more easy to maintain if we use this kinda way to solve coding problem. 
So better get used to this, I guess.

Here are some of the example usage:

```javascript
pairElement("GCG"); //Output [[ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ]]
pairElement("ATCGA"); //Output [ [ 'A', 'T' ], [ 'T', 'A' ], [ 'C', 'G' ], [ 'G', 'C' ], [ 'A', 'T' ] ]
```


## Feedback💬:

I welcome any feedback, suggestions, or improvements to make this solution more efficient and readable. Please feel free to share your thoughts! :smile:
