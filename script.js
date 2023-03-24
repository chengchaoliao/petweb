var item1Qty = 0;
var item2Qty = 0;
var item3Qty = 0;
var item4Qty = 0;
var item5Qty = 0;
var totalItems = 0;
var totalCost = 0;

function incrementItem(itemId) {
  switch (itemId) {
    case 1:
      item1Qty++;
      totalItems++;
      totalCost += 1;
      document.getElementById("item1-qty").innerHTML = item1Qty;
      break;
    case 2:
      item2Qty++;
      totalItems++;
      totalCost += 2;
      document.getElementById("item2-qty").innerHTML = item2Qty;
      break;
    case 3:
      item3Qty++;
      totalItems++;
      totalCost += 3;
      document.getElementById("item3
