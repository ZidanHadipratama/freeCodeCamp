## Problem❓:

According to Kepler's Third Law, the orbital period T of two point masses orbiting each other in a circular or elliptic orbit is:

T=2π√(a^3/μ)

a is the orbit's semi-major axis
μ = GM is the standard gravitational parameter
G is the gravitational constant
M is the mass of the more massive body

Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format `{name: 'name', avgAlt: avgAlt}`.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.



## My Solution💡:

So, I think it's pretty straight forward. You just make an object with a bunch of function:
```javascript
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
```
The problem I face is how to round up the number and I cannot use 3.14 or 22/7 for the pi because the output will be different. With that, I use `Math.round` to round up the number, and I use `Math.PI` to get the pi. The `for` loops is to iterate through the array, calculate the orbital period, and push the new format to `newArr`.

Here are some of the example usage:
```javascript
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));//Output [ { name: 'sputnik', orbitalPeriod: 86400 } ]
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))//Output [ { name: 'iss', orbitalPeriod: 5557 }, { name: 'hubble', orbitalPeriod: 5734 }, { name: 'moon', orbitalPeriod: 2377399 } ]
```


## Feedback💬:

I welcome any feedback, suggestions, or improvements to make this solution more efficient and readable. Please feel free to share your thoughts! :smile:
