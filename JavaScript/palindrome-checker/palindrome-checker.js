function palindrome(str) {
  const arrstr = str.toLowerCase().replace(/[!@#$%^&*()_+{}\[\]:;<>,.?\\\/\|=~-\s]/g, "").split("")
  const sndstr = [...arrstr].reverse().join("")
  const mainstr = arrstr.join("")
  return sndstr == mainstr
}

console.log(palindrome("eye"));//Output true
console.log(palindrome("five|\_/|four"));//Output false
console.log(palindrome("never odd or even"));//Output true