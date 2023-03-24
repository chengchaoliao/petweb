function calculate() {
  const item1 = parseInt(document.getElementById('item1').value);
  const item2 = parseInt(document.getElementById('item2').value);
  const item3 = parseInt(document.getElementById('item3').value);
  const item4 = parseInt(document.getElementById('item4').value);
  const item5 = parseInt(document.getElementById('item5').value);

  const totalItems = item1 + item2 + item3 + item4 + item5;
  const totalPrice = item1*1 + item2*2 + item3*3 + item4*4 + item5*5;

  let discount = 0;
  if (totalItems >= 10) {
    discount = 0.3;
  } else if (totalItems >= 5) {
    discount = 0.2;
  } else if (totalItems >= 2) {
    discount = 0.15;
  } else if (totalItems >= 1) {
    discount = 0.1;
  }

  const discountedPrice = totalPrice * (1 - discount);

  document.getElementById('totalItems').textContent = `Total Items: ${totalItems}`;
  document.getElementById('totalPrice').textContent = `Total Price: $${discountedPrice.toFixed(2)}`;
}
