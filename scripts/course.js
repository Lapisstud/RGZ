let fromRuble = document.getElementById('input-from-ruble');
let toWon = document.getElementById('input-to-won');
let fromWon = document.getElementById('input-from-won');
let toRuble = document.getElementById('input-to-ruble');

document.getElementById('button-to').addEventListener('click', function() {
   toWon.value = fx(fromRuble.value).from("RUB").to("KRW");
 });


 document.getElementById('button-from').addEventListener('click', function() {
    toRuble.value = fx(fromWon.value).from("KRW").to("RUB");
 });