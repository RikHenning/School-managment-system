const studentInfo = [{'name':'Harry', 'age':11}, {'name':'Ron', 'age':12}, {'name':'Hermionie', 'age':12} ];
const teacherInfo = [{'teacherName':'Snape', 'teacherEx':40, 'teacherSubj':'Potions'}, {'teacherName':'Dumbeldore', 'teacherEx':100, 'teacherSubj':'Defence against the dark arts'}, {'teacherName':'Hagrid', 'teacherEx':2, 'teacherSubj':'Magical Creatures'}]
// const courseInfo = [{'courseName':'Poitions', 'courseTeacher':'Snape'}, {'courseName':'Magical Creatures', 'courseTeacher':'Hagrid'}, {'courseName':'Defence against the dark arts', 'courseTeacher':'Dumbeldore'}]

const courseInfo = [{'courseName':'Poitions', 'courseTeacher':teacherInfo[0]}, {'courseName':'Magical Creatures', 'courseTeacher':'Hagrid'}, {'courseName':'Defence against the dark arts', 'courseTeacher':'Dumbeldore'}]

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
  deleteButton.classList.add("tableButton");
  deleteButton.textContent = "Expelliamus!";
  deleteButton.addEventListener("click", () => deleteStudent(index));
  
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

  if(!studentTable){
    return;
  }
  studentTable.innerHTML = "";

  studentInfo.forEach((student, index) => {
    const studentRow = createStudentRow(student, index);
    studentTable.appendChild(studentRow);
  });

}


function addStudent(event) {
  event.preventDefault();
  const name = event.target.elements.studentName.value;
  const age = parseInt(event.target.elements.studentAge.value);

  const studentx = {name, age}
  studentInfo.push(studentx);

  console.log("New student added:", studentx);
  
  displayStudents();
  event.target.reset();
}

displayStudents();

if(studentForm) {
  studentForm.addEventListener("submit", (event) => {
  addStudent(event);
  });
}

/*function revealStudent(event) {
  event.preventDefault();
  const nameInput = event.target.elements.nameInput.value;
  const ageOutput = document.getElementById( 
    if nameInput === studentInfo['name'] {
      console.log(??)}}
*/    

function deleteStudent(index) {
  studentInfo.splice(index, 1);
  displayStudents();
}

/*function deleteStudent(event)
const x = studentInfo.splice(1, 1);

console.log(`myArray values: ${myArray}`);
console.log(`variable x value: ${x}`);

*/


// const teacherForm = document.getElementById("teacherForm");

const teacherTable = document.getElementById('teacherTableBody')

function createTeacherRow(teacher, indexTeacher) {
  const row = document.createElement("tr");

  const teacherNameCell = document.createElement("td");
  teacherNameCell.textContent = teacher.teacherName;

  const teacherExCell = document.createElement("td");
  teacherExCell.textContent = teacher.teacherEx;

  const teacherSubjCell = document.createElement("td");
  teacherSubjCell.textContent = teacher.teacherSubj;

  
  row.appendChild(teacherNameCell);
  row.appendChild(teacherExCell);
  row.appendChild(teacherSubjCell); 
  return row;
}

function displayTeachers() {

  teacherTable.innerHTML = "";

  teacherInfo.forEach((teacher, index) => {
    const teacherRow = createTeacherRow(teacher, index);
    console.log(teacherRow);
    teacherTable.appendChild(teacherRow);
  });

}

displayTeachers();


