let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  displayCart();
}

function displayCart() {
  let cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  cart.forEach((item, index) => {
    cartDiv.innerHTML += `
      <p>${item.name} - ₹${item.price}
      <button onclick="removeItem(${index})">Remove</button>
      </p>
    `;
  });

  document.getElementById("total").innerText = total;
}

function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  displayCart();
}
