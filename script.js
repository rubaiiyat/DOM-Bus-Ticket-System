const seatNumbers = document.querySelectorAll(".numbers");

seatNumbers.forEach((number) => {
  number.addEventListener("click", function () {
    const getSeatNumber = number.innerText;

    const addBackground = document.getElementById(getSeatNumber);
    addBackground.classList.add("bg-green-500");
    addBackground.classList.add("text-black");
  });
});
