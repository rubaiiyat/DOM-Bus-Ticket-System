const seatNumbers = document.querySelectorAll(".numbers");
let seatCount = 0;

const applyCouponBtn = document.getElementById("couponApplyBtn");
applyCouponBtn.disabled = false;

seatNumbers.forEach((number) => {
  number.addEventListener("click", function () {
    seatCount += 1;
    if (seatCount <= 4) {
      const getSeatNumber = number.innerText;

      const addBackground = document.getElementById(getSeatNumber);
      addBackground.classList.add(
        "bg-green-500",
        "text-black",
        "hover:bg-green-600"
      );

      const tableList = document.getElementById("tableList");

      const createTableRow = document.createElement("tr");
      createTableRow.innerHTML = `

      <td>${getSeatNumber}</td>
      <td>Economy</td>
      <td>550</td>

    `;
      tableList.appendChild(createTableRow);

      // add subtotal
      const subTotalPrice = document.getElementById("subTotalPrice");
      const inititalTotalPrice = seatCount * 550;
      subTotalPrice.innerText = inititalTotalPrice;

      // Grand Total
      const grandTotalPrice = document.getElementById("grandTotal");
      const grandTotal = inititalTotalPrice;
      grandTotalPrice.innerText = grandTotal;

      // if (seatCount == 4) {
      applyCouponBtn.disabled = false;

      applyCouponBtn.addEventListener("click", function () {
        const couponError = document.getElementById("couponError");
        const couponInput = document.getElementById("couponInput");
        couponInputValue = couponInput.value;

        if (couponInputValue == "NEW15") {
          const discount = grandTotal * (15 / 100);
          const afterdiscount = grandTotal - discount;
          grandTotalPrice.innerText = afterdiscount;
          couponError.innerText = "";
        } else if (couponInputValue == "Couple 20") {
          const discount = grandTotal * (20 / 100);
          const afterdiscount = grandTotal - discount;
          grandTotalPrice.innerText = afterdiscount;
          couponError.innerText = "";
        } else {
          couponError.innerText = "The coupon code entered is not valid";

          couponError.classList.add("text-red-500");
        }
      });
      // }
    } else {
      const seatError = document.getElementById("seatError");
      seatError.innerText = "Sorry, you’ve reached the 4-seat limit.";

      seatError.classList.add("text-red-500");
    }
  });
});
