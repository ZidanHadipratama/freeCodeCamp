function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const newArr = []
  for (let i=0;i<arr.length;i++){
    const a = arr[i]["avgAlt"]+earthRadius
    const T = 2*Math.PI*((a**3)/GM)**(1/2)
    newArr.push({name : arr[i]["name"], orbitalPeriod : Math.round(T)})
  }
  return newArr
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));//Output [ { name: 'sputnik', orbitalPeriod: 86400 } ]
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))//Output [ { name: 'iss', orbitalPeriod: 5557 }, { name: 'hubble', orbitalPeriod: 5734 }, { name: 'moon', orbitalPeriod: 2377399 } ]