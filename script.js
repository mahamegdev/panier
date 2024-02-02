document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".item");
    const totalElement = document.getElementById("total");
  
    items.forEach(item => {
      const decrementBtn = item.querySelector(".decrement");
      const incrementBtn = item.querySelector(".increment");
      const removeBtn = item.querySelector(".remove");
      const likeBtn = item.querySelector(".like");
      const quantityElement = item.querySelector(".quantity");
      const priceElement = item.querySelector(".price");
  
      decrementBtn.addEventListener("click", function () {
        updateQuantity(-1);
      });
  
      incrementBtn.addEventListener("click", function () {
        updateQuantity(1);
      });
  
      removeBtn.addEventListener("click", function () {
        item.remove();
        updateTotal();
      });
  
      likeBtn.addEventListener("click", function () {
        likeBtn.classList.toggle("active");
      });
  
      function updateQuantity(change) {
        let quantity = parseInt(quantityElement.innerText) + change;
        if (quantity < 0) quantity = 0;
        quantityElement.innerText = quantity;
        updateTotal();
      }
    });
  
    function updateTotal() {
      let totalPrice = 0;
      items.forEach(item => {
        const quantity = parseInt(item.querySelector(".quantity").innerText);
        const price = parseInt(item.querySelector(".price").innerText.slice(1));
        totalPrice += quantity * price;
      });
      totalElement.innerText = `Total: $${totalPrice}`;
    }
  });