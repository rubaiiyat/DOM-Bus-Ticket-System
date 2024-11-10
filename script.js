document.getElementById("buyTicket").addEventListener("click", function () {
  const destination = document.getElementById("destination");
  destination.scrollIntoView({ behavior: "smooth" });
});

const mainSection = document.getElementById("mainSection");

const seatNumbers = document.querySelectorAll(".numbers");
let seatCount = 0;
let leftSeat = 40;

const applyCouponBtn = document.getElementById("couponApplyBtn");
applyCouponBtn.disabled = true;

const successSection = document.getElementById("successSection");
successSection.style.display = "none";

const nextBtnDisabled = document.getElementById("nextBtn");
nextBtnDisabled.disabled = true;

const phoneInput = document.getElementById("phone");

function updateNextBtn() {
  const phoneValue = phoneInput.value;

  if (seatCount > 0 && phoneValue != "") {
    nextBtnDisabled.disabled = false;
  }
}

phoneInput.addEventListener("input", updateNextBtn);

seatNumbers.forEach((number) => {
  number.addEventListener("click", function () {
    seatCount += 1;
    leftSeat -= 1;

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

      document.getElementById("totalSeat").innerText = seatCount;
      document.getElementById("leftSeats").innerText = leftSeat;

      // add subtotal
      const subTotalPrice = document.getElementById("subTotalPrice");
      const inititalTotalPrice = seatCount * 550;
      subTotalPrice.innerText = inititalTotalPrice;

      // Grand Total
      const grandTotalPrice = document.getElementById("grandTotal");
      const grandTotal = inititalTotalPrice;
      grandTotalPrice.innerText = grandTotal;

      /* phoneInput.addEventListener("input", function () {
        const phone = phoneInput.value; // Get the current value of the phone input
        if (seatCount > 0 && phone.trim() !== "") {
          nextBtnDisabled.disabled = false;
        }
      }); */

      document.getElementById("nextBtn").addEventListener("click", function () {
        successSection.style.display = "block";
        mainSection.style.display = "none";
      });

      if (seatCount == 4) {
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
      }
    } else {
      const seatError = document.getElementById("seatError");
      seatError.innerText = "Sorry, you’ve reached the 4-seat limit.";

      seatError.classList.add("text-red-500");
    }

    updateNextBtn();
  });
});

document.getElementById("continueBtn").addEventListener("click", function () {
  mainSection.style.display = "block";
  successSection.style.display = "none";
});
