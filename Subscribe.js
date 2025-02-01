const subscribe = document.getElementById('subscribe');

subscribe.addEventListener('click', () => {
    const email = document.getElementById('newsletter').value.trim(); // Get the latest value
    if (email) {
        alert(`Thank you for subscribing! You will receive updates at ${email}`);
    } else {
        alert('Invalid email address');
    }
});



const cart = [
    {
      id: 1,
      name: "Aloevera Gel 50 gm",
      price: 40,
      image: "./assets/aloe-vera.avif",
      quantity: 1,
    },
    {
      id: 2,
      name: "Blueberry Gel 100 gm",
      price: 100,
      image: "./assets/blueberry-gel.avif",
      quantity: 1,
    },
    {
      id: 3,
      name: "Saffron Glow Gel",
      price: 150,
      image: "./assets/saffron-gel.avif",
      quantity: 1,
    },
    {
      id: 4,
      name: "Anti Acne Face Wash",
      price: 150,
      image: "./assets/sandal-wood-facewash.avif",
      quantity: 1,
    },
    {
      id: 5,
      name: "Goat Milk Manjistha Soap",
      price: 70,
      image: "./assets/goat-milk-soap.png",
      quantity: 1,
    },
  ];

  function updateCart() {
    const cartBody = document.getElementById("cart-body");
    cartBody.innerHTML = "";
    let grandTotal = 0;
    cart.forEach((product) => {
      const row = document.createElement("tr");
      row.innerHTML = `
    <td>${product.name}</td>
    <td><img src="${product.image}" alt="${product.name}" width="50"></td>
    <td>${product.price} ₹</td>
    <td><input type="number" value="${
      product.quantity
    }" min="1" class="form-control w-50" onchange="updateQuantity(${
        product.id
      }, this.value)"></td>
    <td>${product.price * product.quantity} ₹</td>
    <td><button class="btn btn-danger" onclick="removeFromCart(${
      product.id
    })">Remove</button></td>
`;
      cartBody.appendChild(row);
      grandTotal += product.price * product.quantity;
    });
    document.getElementById("grand-total").innerText = grandTotal;
  }

  function updateQuantity(id, quantity) {
    const product = cart.find((p) => p.id === id);
    if (product) {
      product.quantity = parseInt(quantity);
      updateCart();
    }
  }

  function removeFromCart(id) {
    const index = cart.findIndex((p) => p.id === id);
    if (index !== -1) {
      cart.splice(index, 1);
      updateCart();
    }
  }

  document.addEventListener("DOMContentLoaded", updateCart);

  document
    .getElementById("logoutBtn")
    .addEventListener("click", function () {
      window.location.href = "about:blank"; // Closes the session
    });

  document.getElementById("buynow").addEventListener("click", function () {
    alert("Order placed successfully!");
  });


  