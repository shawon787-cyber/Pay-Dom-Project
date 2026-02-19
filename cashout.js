// document.getElementById("cashout-btn").addEventListener("click", function(){
//     // 1-get the agent number and validate
//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length !== 11){
//         alert("Invalid Number");
//         return;
//     }

//     // 2-get the amount and validate
//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount)

//     // 3-get the current balance
//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
//     console.log(balance)

//     // 4-calculate the new balance
//     const newBalance = Number(balance) - Number(cashoutAmount);
//     if(newBalance < 0){
//         alert("Invalid Amount");
//         return;
//     }

//     //  5-verify pin
//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const pin = cashoutPinInput.value;
//     if(pin === '1234'){
//         alert("Cashout Succeed");
//         console.log(newBalance);
//         balanceElement.innerText = newBalance;
//     }
//     else{
//         alert("Invalid pin");
//         return;
//     }
// })

document.getElementById("cashout-btn").addEventListener("click", function(){
    const cashoutNumber = getValueFromInput("cashout-number");
    if(cashoutNumber.length !== 11){
        alert("Invalid Number")
    }
    // console.log(cashoutNumber);
    const cashoutAmount = getValueFromInput("cashout-amount");
    if(cashoutAmount == ""){
        alert("Amount not set");
        return;
    }
    // 3-get the current balance
    // const balanceElement = document.getElementById("balance");
    // const balance = balanceElement.innerText;
    // console.log(balance)
    const currentBalance = getBalance();
    // calculate balance
    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance)
    if(newBalance < 0){
        alert("Invalid Amount");
        return;
    }
    const pin = getValueFromInput("cashout-pin");
    if(pin === "1234"){
        alert("Cashout Succeed");
        setBalance(newBalance);
         // history container k dhore nia asbo
        const history = document.getElementById("history-container");
        // 2-new div create korbo
        const newHistory = document.createElement("div");
        // 3- new div a inner html add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-gray-300">
             Cash out ${cashoutAmount} taka success to cash out-number ${cashoutNumber} at ${new Date()}
        </div>
        `
        // 4-history container a new div append korbo
        history.append(newHistory)
    }
    else{
        alert("Invalid Pin")
    }
})