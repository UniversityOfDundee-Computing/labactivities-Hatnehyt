var amount
var updatedAmount
var tippedAmount
function submit5() {
    amount = document.getElementById("amount").value;
    updatedAmount = amount * 1.05
    updatedAmount = updatedAmount.toFixed(2)
    tippedAmount = updatedAmount - amount
    document.getElementById("ptag2").innerHTML = ("£" + tippedAmount); 
    document.getElementById("ptag").innerHTML = ("£"+updatedAmount); 
}
function submit10() {
    amount = document.getElementById("amount").value;
    updatedAmount = amount * 1.1
    updatedAmount = updatedAmount.toFixed(2)
    tippedAmount = updatedAmount - amount
    document.getElementById("ptag2").innerHTML = ("£" + tippedAmount); 
    document.getElementById("ptag").innerHTML = ("£" + updatedAmount); 
}
function submit25() {
    amount = document.getElementById("amount").value;
    updatedAmount = amount * 1.25
    updatedAmount = updatedAmount.toFixed(2)
    tippedAmount = updatedAmount - amount
    document.getElementById("ptag2").innerHTML = ("£" + tippedAmount); 
    document.getElementById("ptag").innerHTML = ("£" + updatedAmount); 
}