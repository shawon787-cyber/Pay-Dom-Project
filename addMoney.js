document.getElementById("add-money-btn").addEventListener("click", function(){
    const bankAccount = getValueFromInput("add-money-bank");
    if(bankAccount == "Select a Bank"){
        alert("Please select a bank");
        return;
    }
    // get bank account number
    const accno = getValueFromInput("add-money-number");
    if(accno.length !== 11){
        alert("Inavalid account number");
        return;
    }
    // get amount
    const amount = getValueFromInput("add-money-amount");
    const newBalance = getBalance() + Number(amount);

    const pin = getValueFromInput("add-money-pin");
    if(pin == "1234"){
        alert(`Add money success from ${bankAccount} at ${new Date()}`);
        setBalance(newBalance);
        // history container k dhore nia asbo
        const history = document.getElementById("history-container");
        // 2-new div create korbo
        const newHistory = document.createElement("div");
        // 3- new div a inner html add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-gray-300">
        Add money success from ${bankAccount} account-number ${accno} at ${new Date()}
        </div>
        `
        // 4-history container a new div append korbo
        history.append(newHistory)
    }
    else{
        alert("Invalid pin");
        return;
    }
})