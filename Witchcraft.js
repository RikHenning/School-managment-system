const studentInfo = [{'name':'Harry', 'age':11}, {'name':'Ron', 'age':12}, {'name':'Hermionie', 'age':12} ];
const teacherInfo = [{'teacherName':'Snape', 'teacherEx':40, 'teacherSubj':'Potions'}, {'teacherName':'Dumbeldore', 'teacherEx':100, 'teacherSubj':'Defence against the dark arts'}, {'teacherName':'Hagrid', 'teacherEx':2, 'teacherSubj':'Magical Creatures'}]
const courseInfo = [{'courseName':'Poitions', 'courseTeacher':'Snape'}, {'courseName':'Magical Creatures', 'courseTeacher':'Hagrid'}, {'courseName':'Defence against the dark arts', 'courseTeacher':'Dumbeldore'}]

/*const studentForm = document.getElementById("studentForm");

console.log(studentForm);

You gave the above code last Saturday.
 Not sure what the purpose is?

*/

function addStudent(event) {
  event.preventDefault();
  const name = event.target.elements.studentName.value;
  const age = parseInt(event.target.elements.studentAge.value);

  const student = {name, age}
  studentInfo.push(student);

  console.log("New student added:", student);
  event.target.reset();
}

studentForm.addEventListener("submit", (event) => {
  addStudent(event);
});