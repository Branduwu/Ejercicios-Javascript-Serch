function printCommonCourses() {
    let student1Courses = ['Math', 'English', 'Programming'];
    let student2Courses = ['Geography', 'Spanish', 'Programming'];
    
    let commonCourses = student1Courses.filter(course => student2Courses.includes(course));
    console.log("Cursos comunes:", commonCourses.join(", ")); 
    document.getElementById("resultado").innerText = "Cursos comunes: " + commonCourses.join(", "); 
  }
  