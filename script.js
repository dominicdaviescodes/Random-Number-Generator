const number = document.querySelector(".number")
const generateBtn = document.querySelector(".generate")

const generateNumber = () => {
  // generate number between 1 10
  const randomNumber = Math.floor(Math.random() * 10 + 1)
  number.innerHTML = randomNumber
}

generateBtn.addEventListener("click", generateNumber)

// to have random number on page load
generateNumber()
