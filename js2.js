function doubleNumbers() {
    let numbers = [1, 2, 4, 5];
    let doubledNumbers = numbers.map(num => num * 2);
    console.log(doubledNumbers);
    document.getElementById("resultado").innerText = doubledNumbers.join(", ");
  }
  