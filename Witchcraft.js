const studentInfo = [{'name':'Harry', 'age':11}, {'name':'Ron', 'age':12}, {'name':'Hermionie', 'age':12} ];
const teacherInfo = [{'teacherName':'Snape', 'teacherEx':40, 'teacherSubj':'Potions'}, {'teacherName':'Dumbeldore', 'teacherEx':100, 'teacherSubj':'Defence against the dark arts'}, {'teacherName':'Hagrid', 'teacherEx':2, 'teacherSubj':'Magical Creatures'}]
const courseInfo = [{'courseName':'Poitions', 'courseTeacher':'Snape'}, {'courseName':'Magical Creatures', 'courseTeacher':'Hagrid'}, {'courseName':'Defence against the dark arts', 'courseTeacher':'Dumbeldore'}]

const studentForm = document.getElementById("studentForm");

console.log(studentForm);

const studentTable = document.getElementById('studentTableBody')

function createStudentRow(studenty, index) {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = studenty.name;

  const ageCell = document.createElement("td");
  ageCell.textContent = studenty.age;

  const actionsCell = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Expelliamus!";
  /*deleteButton.addEventListener("click", () => deleteStudent(index) {
    delete studentInfo[nameCell, ageCell]
  });*/

  /*Goodmorning Barra, Thank you again for last night. I was experimenting
  With this delete function. I managed to get the button's in the table.
  Next to get it to delete a single student is where I got stuck. The commented out 
  section deletes all students from the array. Am I using the right "delete"-command? 
  or is there something better. Layout wise I don't know yet why the button doesn't
  recieve a border.
  As to why there is a second student added when we add one I haven't come
  to a conclusion yet. I took out labels in the HTML to see if it would make any differance.
  Am I correct to think that the name label with the input button is needed for 
  event.target.element or could we use something else? Is naming our label "name" for students
  Confusing for the code?*/
  
  actionsCell.appendChild(deleteButton);
  /*actionsCell.appendChild(editButton);*/

  row.appendChild(nameCell);
  row.appendChild(ageCell);
  row.appendChild(deleteButton);
  /*row.appendChild(gradeCell);
  row.appendChild(actionsCell);
*/
  return row;
}

function displayStudents() {

  studentTable.innerHTML = "";

  studentInfo.forEach((studentx, index) => {
    const studentRow = createStudentRow(studentx, index);
    studentTable.appendChild(studentRow);
  });

}


function addStudent(event) {
  event.preventDefault();
  const name = event.target.elements.studentName.value;
  const age = parseInt(event.target.elements.studentAge.value);

  const student = {name, age}
  studentInfo.push(student);

  console.log("New student added:", student);
  event.target.reset();
  displayStudents();
}

displayStudents();

studentForm.addEventListener("submit", (event) => {
  addStudent(event);
});

/*function revealStudent(event) {
  event.preventDefault();
  const nameInput = event.target.elements.nameInput.value;
  const ageOutput = document.getElementById( 
    if nameInput === studentInfo['name'] {
      console.log(??)}}
*/    

/*function deleteStudent(event) {
  event.preventDefault();
  
  delete studentInfo[event.target.elements.delStudent]
  const student = {name, age}
  studentInfo.push(student);

  console.log("New student added:", student);
  event.target.reset();
}*/

/*function deleteStudent(event)
const x = studentInfo.splice(1, 1);

console.log(`myArray values: ${myArray}`);
console.log(`variable x value: ${x}`);

*/

studentForm.addEventListener("submit", (event) => {
  addStudent(event);
});


const teacherForm = document.getElementById("teacherForm");

console.log(teacherForm);

const teacherTable = document.getElementById('teacherTableBody')

function createTeacherRow(teacher, index) {
  const row = document.createElement("tr");

  const teacherNameCell = document.createElement("td");
  nameCell.textContent = teacher.teacherName;

  const teacherExCell = document.createElement("td");
  ageCell.textContent = teacher.teacherEx;

  const teacherSubjCell = document.createElement("td");
  ageCell.textContent = teacher.teacherSubj;

  
  row.appendChild(teacherNameCell);
  row.appendChild(teacherExCell);
  row.appendChild(teacherSubjCell); 
  return row;
}

function displayTeachers() {

  teacherTable.innerHTML = "";

  teacherInfo.forEach((teacher, index) => {
    const teacherRow = createTeacherRow(teacher, index);
    teacherTable.appendChild(teacherRow);
  });

}


