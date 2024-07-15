const form = document.querySelector("form")

form.addEventListener("submit", function (e) {
  e.preventDefault()

  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const results = document.querySelector("#results")
  const category = document.getElementById("category")

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}`
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    results.innerHTML = `<span>${bmi} </span>`

    if (bmi < 18.6) {
      category.innerHTML = `<span>You fall in Under Weight range</span>`
    } else if (bmi < 25) {
      category.innerHTML = `<span>You fall in Normal Range</span>`
    } else if (bmi >= 25) {
      category.innerHTML = `<span>You fall in Overweight range</span>`
    }
  }
})
