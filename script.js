var item1Qty = 0;
var item2Qty = 0;
var item3Qty = 0;
var item4Qty = 0;
var item5Qty = 0;

function incrementItem(itemId) {
  switch (itemId) {
    case 1:
      item1Qty++;
      document.getElementById("item1-qty").innerHTML = item1Qty;
      break;
    case 2:
      item2Qty++;
      document.getElementById("item2-qty").innerHTML = item2Qty;
      break;
    case 3:
      item3Qty++;
      document.getElementById("item3-qty").innerHTML = item3Qty;
      break;
    case 4:
      item4Qty++;
      document.getElementById("item4-qty").innerHTML = item4Qty;
      break;
    case 5:
      item5Qty++;
      document.getElementById("item5-qty").innerHTML = item5Qty;
      break;
  }
  
  updateTotal();
}

function decrementItem
