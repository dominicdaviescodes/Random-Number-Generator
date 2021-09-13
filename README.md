# Random-Number-Generator

## Math.random()

Math.random() gives us a random number between 0 and upto 1 (not including 1)

Multiplying by 10 gives us 7.454322 etc.

So we floor this to give us a whole number.

```js
const rand = Math.floor(Math.random() * 10)
```
gives us 0 to 9.

```js
const rand = Math.floor(Math.random() * 10 + 1)
```
gives us 1 to 10

Notes.
Math.trunc() cuts away (truncates) the decimal places.
Math.floor() rounds towards the closest lower integer number.

We can also see a random number on page load if we call the function separately.

```js
const number = document.querySelector(".number")
const generateBtn = document.querySelector(".generate")

const generateNumber = () => {
  // generate number between 1 10
  const randomNumber = Math.floor(Math.random() * 10 + 1)
  number.innerHTML = randomNumber
}

generateBtn.addEventListener("click", generateNumber)

// to have random number on page load
generateNumber();
```