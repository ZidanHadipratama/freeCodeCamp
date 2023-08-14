function telephoneCheck(str) {
  const regex = /(^(1\s?)?\(\d{3}\)\s?\d{3}-\d{4}$)|(^(1\s?)?\d{3}(-|\s)?\d{3}(-|\s)?\d{4}$)/
  return regex.test(str);
}
telephoneCheck("555-555-5555");//Output true
telephoneCheck("(555)555-5555");//Output true
telephoneCheck("1 (555) 555-5555");//Output true
telephoneCheck("(6054756961)");//Output false
telephoneCheck("27576227382");//Output false