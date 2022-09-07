var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentStockPrice = document.querySelector("#current-stock-price");
var btnTellMe = document.querySelector("#btn-tell-me");
var outputEl = document.querySelector("#outputEl");

function calculateProfitOrLoss(initial, quantity, current) {
  if (initial < current) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    outputEl.innerText = `Hey your profit is : ${profit.toFixed(2)} and profit percentage is : ${profitPercentage.toFixed(2)}%.`
    outputEl.style.backgroundColor = "green";
    outputEl.style.color = "white";
  } else if (initial > current) {

    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    outputEl.innerText = `Hey your loss is : ${loss.toFixed(2)} and loss percentage is : ${lossPercentage.toFixed(2)}%.`
    outputEl.style.backgroundColor = "red";
    outputEl.style.color = "white";
  } else {
    outputEl.innerText = "No pain no gain, No gain no pain."
    outputEl.style.backgroundColor = "black";
    outputEl.style.color = "white";
  }
}

function clickHandler() {

  var initial = Number(initialPrice.value);
  var quantity = Number(stockQuantity.value);
  var current = Number(currentStockPrice.value);
  if (initialPrice.value && stockQuantity.value && currentStockPrice.value) {
    if (initial >= 0 && quantity >= 0 && current >= 0) {
      calculateProfitOrLoss(initial, quantity, current);
    } else {
      outputEl.innerText = "All fields should be positive.";
    }
  } else {
    outputEl.innerText = "Please enter all the fields to calculate your profit or loss.";
  }
}

btnTellMe.addEventListener("click", clickHandler)