function computeSumAndProduct() {
    let numbers = [1, 2, 3, 4];
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    let product = numbers.reduce((acc, curr) => acc * curr, 1);
  
    let result = "La suma es " + sum + ". La multiplicación es " + product + ".";
    console.log(result); 
    document.getElementById("resultado").innerText = result; }