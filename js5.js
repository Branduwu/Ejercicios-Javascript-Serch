
function executeCommands() {
    let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
  
    let result = "";
  
   
    result += "Lista de personas: " + people.join(", ") + "<br>";
  
    
    let indexDani = people.indexOf("Dani");
    if (indexDani !== -1) {
      people.splice(indexDani, 1);
    }
  
   
    let indexJuan = people.indexOf("Juan");
    if (indexJuan !== -1) {
      people.splice(indexJuan, 1);
    }
  
   
    let indexLuis = people.indexOf("Luis");
    if (indexLuis !== -1) {
      people.splice(indexLuis, 1);
      people.unshift("Luis");
    }
  
    
    people.push("TuNombre");
  
  
    for (let i = 0; i < people.length; i++) {
      result += people[i] + "<br>";
      if (people[i] === "Maria") {
        break;
      }
    }
  
  
    let indexMaria = people.indexOf("Maria");
    result += "Índice de 'Maria': " + indexMaria + "<br>";
  
   
    result += "Cantidad de personas al final: " + people.length + "<br>";
  
   
    document.getElementById("resultado").innerHTML = result;
  }
  