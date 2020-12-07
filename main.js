// DOCUMENT OBJECT MODEL (DOM)

// Wrapping everything inside a window.onload method to ensure that everything is ready before we execute any code.
window.onload = function () {
    const btn = document.getElementById("calculate_btn");
   const celsiusTemp = document.getElementById("celsius");
  btn.addEventListener("click", function () {
    // On the HTML code, our Input field has an id of "temp"
    // Everytime a user clicks the button, we take the value of the input field with the help of this code:
    const userInput = document.getElementById("temp").value;
    // then pass that value to a function that we defined
    let temp = f_to_c(userInput);

    //in our HTML code, we're given the id of "celsius" to a <p> tag
    // and we saved that element in a variable "celsiusTemp" using document.getElementById("celsius")
    // we can change its inner text using .innerText
    celsiusTemp.innerText = temp;
  });

  function f_to_c(f) {
    const temp = (5 / 9) * (f - 32);
    return temp;
  }
};
