## Problem❓:

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.


## My Solution💡:

So, if the first word is a vowel, that's pretty easy, just add `way` at the back, so we can just skip that.

For the first word consonant, it's kinda hard, the way I solve it as follow:
1. Check if the first letter is consonant or not
2. If it is a consonant, get "how many letter of consonant inside the word before it's meet the vowel"
3. And then slice the word, and ad `ay` at the back of it.

So, I came up with this:
```javascript
function translatePigLatin(str) {
  let totcon = 0;
  if (/[aiueo]/.test(str[0])){
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
```

`let totcon`, this variabel is to store how many consonant letter before it's gonna meet a vowel letter. For the `if`, pretty simple, return if the first letter is a vowel. 
For the `for`loop, is t0 iterate on each of the letter inside the string, when it's meet with a vowel, the `for` loop gonna break, and it will return the edited string.
For `str.splice(totcon)` is to take the word from the index when it's meet the vowel until the end of the string, `str.slice(0, totcon)` to take from the start until it's meet the consonant,
and `ay` to add ay at the back of it.

I know there is more effective way to do it, but at least it's get the job done✅.

Here are some of the example usage:

```javascript
translatePigLatin("consonant"); //Output onsonantcay
translatePigLatin("algorithm"); //Output algorithmway
translatePigLatin("glove"); //Output oveglay
translatePigLatin("rhythm"); //Output rhythmay
```


## Feedback💬:

I welcome any feedback, suggestions, or improvements to make this solution more efficient and readable. Please feel free to share your thoughts! :smile:
