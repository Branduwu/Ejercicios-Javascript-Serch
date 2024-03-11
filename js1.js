function printOutString() {
    let arr = ["This", "is", "a", "sentence."];
    let result = arr.join(" ");
    console.log(result); 
  }
  printOutString(); 
  
  document.getElementById("imprimirResultado").addEventListener("click", function() {
    printOutString();
  }); 
  document.getElementById("regresarIndex").addEventListener("click", function() {
    window.location.href = "./Index.html"; 
  });
  