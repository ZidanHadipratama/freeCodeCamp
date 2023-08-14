## Problem❓:

Return `true` if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

```javascript
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
```

For this challenge you will be presented with a string such as `800-692-7753` or `8oo-six427676;laskdjf`. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is `1`. Return `true` if the string is a valid US phone number; otherwise return `false`.



## My Solution💡:
So, I solve it like this:
1. Check if the string is valid US formats number
2. Return true if it is, false otherwise.

The problem is, how to check if it is a valid US number?. After some digging with regular expression, I come up with this:
```javascript
function telephoneCheck(str) {
  const regex = /^(1\s?)?\(\d{3}\)\s?\d{3}-\d{4}$|^(1\s?)?\d{3}(-|\s)?\d{3}(-|\s)?\d{4}$/
  return regex.test(str);
}
```
Let me explain bit by bit:
`^(1\s?)?` this part is to check wether this is the right US country code or not. `^` to "start-from-this". `?` is to check if it is occur 1 or 0 time.
`\(\d{3}\)` this part is to check if the first three number is inside a parenthesis.
`\s?` this is to match if space is occur 1 time or not show up at all.
`\d{3}-\d{4}` is to match if the next three number is follow up by a hyphen(-) and follow up by four number. Closed by `$` to "end" the checking.
`|` is the "OR" logic for regex. So it will come true wether the string match with `^(1\s?)?\(\d{3}\)\s?\d{3}-\d{4}$` or `^(1\s?)?\d{3}(-|\s)?\d{3}(-|\s)?\d{4}$`.
Same as before, `^(1\s?)?` is to match the country code.
`\d{3}` to match if there is exactly 3 numbers show up.
`(-|\s)?` to match if there is a hyphen, a space, or if there is not one of that.
`\d{4}` is to match exactly 4 numbers.


Here are some of the example usage:

```javascript
telephoneCheck("555-555-5555");//Output true
telephoneCheck("(555)555-5555");//Output true
telephoneCheck("1 (555) 555-5555");//Output true
telephoneCheck("(6054756961)");//Output false
telephoneCheck("27576227382");//Output false
```


## Feedback💬:

I welcome any feedback, suggestions, or improvements to make this solution more efficient and readable. Please feel free to share your thoughts! :smile:
