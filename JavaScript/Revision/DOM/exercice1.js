const names = ["Alicey", "Ari", "Barry", "Bruce", "Emrald", "Sussan", "Tiara", "Todd", "Yvette"];

function isNameAvailable(person) {
  if (names.includes(person)) {
    let courses = Number(prompt(`Welcome, ${person}! Enter the number of courses:`));

    while (isNaN(courses) || courses <= 0) {
      courses = Number(prompt(`Invalid input. Enter a valid number of courses:`));
    }

    let confirmed = confirm(`Confirm that you have ${courses} courses?`);

    if (!confirmed) {
      courses = Number(prompt(`Enter the number of courses:`));
    }

    while (isNaN(courses) || courses <= 0) {
      courses = Number(prompt(`Invalid input. Enter a valid number of courses:`));
    }
    
    let courseList = [];

    function loopCourses() {
      let i = 1;
  
      while (i <= courses) {
        let courseName = prompt(`Enter the name of course ${i}:`);
        if (courseName && courseName.trim() !== "") {
          courseList.push(courseName.trim());
          i++;
        }
        else {
          alert("Course name cannot be empty.");
        }
      }
      alert(`You've entered the following courses:\n- ${courseList.join("\n- ")}`);
    }
    
    loopCourses();
    
    let confirmCourses = confirm("Are all courses accurately inputed?");
    
    if(!confirmCourses) {
      courseList = [];
      loopCourses();
    }
    
    let total = 0;
    
    for (let i = 0; i < courseList.length; i++) {
      let grade = Number(prompt(`Enter grade for ${courseList[i]}: `));
      
      total += grade;
    }
    
    function findAverage() {
      let average = total/courses;
      return average;
    }
    
    let result = `${person}, you have an average score of ${findAverage()}`
    
    console.log(result);
    
  }
  else {
    alert(`Sorry ${person}, your name is not found in the system's database!`);
  }
}

// Call it like this:
let username = prompt("Enter your name:");
username = username.trim();
isNameAvailable(username);