function calculate() {
  const item1 = parseInt(document.getElementById('item1').value);
  const item2 = parseInt(document.getElementById('item2').value);
  const item3 = parseInt(document.getElementById('item3').value);
  const item4 = parseInt(document.getElementById('item4').value);
  const item5 = parseInt(document.getElementById('item5').value);
  const item6 = parseInt(document.getElementById('item6').value);
  const item7 = parseInt(document.getElementById('item7').value);
  const item8 = parseInt(document.getElementById('item8').value);
  const item9 = parseInt(document.getElementById('item9').value);
  const item10 = parseInt(document.getElementById('item10').value);
  const item11 = parseInt(document.getElementById('item11').value);
  const item12 = parseInt(document.getElementById('item12').value);
  const item13 = parseInt(document.getElementById('item13').value);


  const totalItems = item1+item2+item3+item4+item5+item6+item7+item8+item9+item10+item11+item12+item13;
  const totalPrice = item1*690+item2*620+item3*650+item4*590+item5*790+item6*790+item7*720+item8*380+item9*750+item10*550+item11*450+item12*520+item13*690;

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
