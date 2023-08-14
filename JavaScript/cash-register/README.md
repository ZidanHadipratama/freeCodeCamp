## Problem❓:

Design a cash register drawer function `checkCashRegister()` that accepts purchase price as the first argument (`price`), payment as the second argument (`cash`), and cash-in-drawer (`cid`) as the third argument.

`cid` is a 2D array listing available currency.

The `checkCashRegister()` function should always return an object with a `status` key and a change key.

Return `{status: "INSUFFICIENT_FUNDS", change: []}` if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return `{status: "CLOSED", change: [...]}` with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return `{status: "OPEN", change: [...]}`, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)

See below for an example of a cash-in-drawer array:

```javascript
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
```


## My Solution💡:

It's hard to explain, I'm sorry:
```javascript
function rot13(str) {
  function checkCashRegister(price, cash, cid) {
    let change = cash-price
    const newcid = JSON.parse(JSON.stringify(cid))
    const arr = []
    const money = {
        "PENNY" : 0.01,
        "NICKEL": 0.05,
        "DIME"  : 0.1,
        "QUARTER": 0.25,
        "ONE"   : 1,
        "FIVE"  : 5,
        "TEN"   : 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    }
    let closed = 0
    for (let i=newcid.length-1;i>=0;i--){
        let many = Math.round(newcid[i][1]/money[newcid[i][0]])
        let much = Math.floor(change/money[newcid[i][0]])
        let need = Math.min(many,much)*money[newcid[i][0]]
        if (Math.min(many,much) != 0 && change - need >= 0){
        change = change - need
        change = change.toFixed(2)
        newcid[i][1] -= need
        if (i==0 && change > 0){
            return {status: "INSUFFICIENT_FUNDS", change: []}
        }
        arr.push([newcid[i][0], need])
        }
        if (newcid[i][1] == 0){
            closed++
        }
    }
    if (closed == newcid.length){
        return {status: "CLOSED", change: cid}
    }else{
        return {status: "OPEN", change: [...arr]}
    }
    }
}
```

Here are some of the example usage:

```javascript
checkCashRegister(19.5, 40, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);//Output { status: 'OPEN',change: [ [ 'TWENTY', 20 ], [ 'QUARTER', 0.5 ] ] }
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
//Output 
//{ status: 'OPEN',
//   change: 
//    [ [ 'TWENTY', 60 ],
//      [ 'TEN', 20 ],
//      [ 'FIVE', 15 ],
//      [ 'ONE', 1 ],
//      [ 'QUARTER', 0.5 ],
//      [ 'DIME', 0.2 ],
//      [ 'PENNY', 0.04 ] ] }
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
//Output { status: 'INSUFFICIENT_FUNDS', change: [] }
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
//Output
// { status: 'CLOSED',
//   change: 
//    [ [ 'PENNY', 0.5 ],
//      [ 'NICKEL', 0 ],
//      [ 'DIME', 0 ],
//      [ 'QUARTER', 0 ],
//      [ 'ONE', 0 ],
//      [ 'FIVE', 0 ],
//      [ 'TEN', 0 ],
//      [ 'TWENTY', 0 ],
//      [ 'ONE HUNDRED', 0 ] ] }
```



## Feedback💬:

I welcome any feedback, suggestions, or improvements to make this solution more efficient and readable. Please feel free to share your thoughts! :smile: