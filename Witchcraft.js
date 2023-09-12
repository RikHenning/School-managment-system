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

  /*const actionsCell = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => deleteStudent(index));

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => editStudent(index));

  actionsCell.appendChild(deleteButton);
  actionsCell.appendChild(editButton);
*/
  row.appendChild(nameCell);
  row.appendChild(ageCell);
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
how do I get the right info from the string. getElementById(studentInfo['name':'nameInput', 'age': ?])
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