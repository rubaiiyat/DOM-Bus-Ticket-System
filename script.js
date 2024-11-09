const seatNumbers = document.querySelectorAll(".numbers");
let seatCount = 0;

const applyCouponBtn = document.getElementById("couponApplyBtn");
applyCouponBtn.disabled = true;

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
      subTotalPrice.innerText = `${seatCount * 550}`;

      if (seatCount == 4) {
        applyCouponBtn.disabled = false;
      }
    } else {
      const seatError = document.getElementById("seatError");
      seatError.innerText = "Sorry, you’ve reached the 4-seat limit.";

      seatError.classList.add("text-red-500");
    }
  });
});
