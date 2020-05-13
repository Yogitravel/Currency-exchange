const USD = {
    VND: 23388.85,
    EUR: 0.92,
    KRW: 1223.56,
    USD: 1,
   

} 

let result = document.getElementById("resultArea") // tag from HTML
let convertedAmount = 0 // use for get converted value from function 
let formatamount = "" // use for get value after formatted 


console.log(USD.EUR)


function muntilresult() {
    
    let from = document.getElementById("fromList"); // tag from HTML
    let to = document.getElementById("toList"); // tag from HTML
    let amount = document.getElementById("amountInput") // tag from HTML

    let result = USD[to.value] / USD[from.value] * amount.value
    document.getElementById("resultArea").innerHTML = `The total amount of ${from.value} is: ${result} ${to.value}`
} 


function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency"
    });
    return formatter.format(value);

}
