 const itemList = document.getElementById("item-list");
    const grandTotalElement = document.querySelector('[data-ns-test="grandTotal"]');
    let grandTotal = 0;

    function addItem() {
      const itemName = document.getElementById("item-name-input").value.trim();
      const itemPrice = parseFloat(document.getElementById("item-price-input").value.trim());

      // Validation
      if (itemName === "" || isNaN(itemPrice) || itemPrice < 0) {
        alert("Please enter a valid item name and a valid positive number for price.");
        return;
      }

      // Create new row
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.setAttribute("data-ns-test", "item-name");
      nameCell.textContent = itemName;

      const priceCell = document.createElement("td");
      priceCell.setAttribute("data-ns-test", "item-price");
      priceCell.textContent = itemPrice.toFixed(2);

      row.appendChild(nameCell);
      row.appendChild(priceCell);
      itemList.appendChild(row);

      // Update grand total
      grandTotal += itemPrice;
      grandTotalElement.textContent = grandTotal.toFixed(2);

      // Clear input fields
      document.getElementById("item-name-input").value = "";
      document.getElementById("item-price-input").value = "";
    }