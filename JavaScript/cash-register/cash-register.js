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

checkCashRegister(19.5, 40, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])