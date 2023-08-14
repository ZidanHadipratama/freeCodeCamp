function convertHTML(str) {
  const convert = {
    "&" : "&amp;",
    "<" : "&lt;",
    ">" : "&gt;",
    '"' : "&quot;",
    "'" : "&apos;"
  }

  let newstr = str.split("")
  for (let i=0;i<newstr.length;i++){
    if (convert.hasOwnProperty(newstr[i])){
      newstr[i] = convert[newstr[i]]
    } 
  }

  return newstr.join("")
}

convertHTML("Dolce & Gabbana"); //Output Dolce &amp; Gabbana
convertHTML("Sixty > twelve"); //Output Sixty &gt; twelve
convertHTML('Stuff in "quotation marks"'); //Output Stuff in &quot;quotation marks&quot;
