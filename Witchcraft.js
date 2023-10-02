const studentInfo = [{'name':'Harry', 'age':11}, {'name':'Ron', 'age':12}, {'name':'Hermionie', 'age':12} ];
const teacherInfo = [{'teacherName':'Snape', 'teacherEx':40, 'teacherSubj':['Potions']}, {'teacherName':'Dumbeldore', 'teacherEx':100, 'teacherSubj':['Defence against the dark arts']}, {'teacherName':'Hagrid', 'teacherEx':2, 'teacherSubj':['Magical Creatures']}]
// const courseInfo = [{'courseName':'Poitions', 'courseTeacher':'Snape'}, {'courseName':'Magical Creatures', 'courseTeacher':'Hagrid'}, {'courseName':'Defence against the dark arts', 'courseTeacher':'Dumbeldore'}]

const courseInfo = [{'courseName':"Magic level 1", 'courseTeacher':teacherInfo[0]}, {'courseName':"Magic level 2", 'courseTeacher':teacherInfo[1]}, {'courseName':"Magic level 3", 'courseTeacher':teacherInfo[2]}]

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


const teacherForm = document.getElementById("teacherForm");

const teacherTable = document.getElementById('teacherTableBody')

function createTeacherRow(teacher, indexTeacher) {
  const row = document.createElement("tr");

  const teacherNameCell = document.createElement("td");
  teacherNameCell.textContent = teacher.teacherName;

  const teacherExCell = document.createElement("td");
  teacherExCell.textContent = teacher.teacherEx;

  // const teacherSubjCell = document.createElement("td");
  // teacherSubjCell.textContent = teacher.teacherSubj;

  const teacherSubjCell = document.createElement("td");

    if (teacher.teacherSubj.length > 1) //The problem is here, but how to solve it.
    {
        teacherSubjCell.textContent = teacher.teacherSubj.join(', ');
    } else {
        teacherSubjCell.textContent = teacher.teacherSubj[0]
    }
  
  row.appendChild(teacherNameCell);
  row.appendChild(teacherExCell);
  row.appendChild(teacherSubjCell); 
  return row;
}

function displayTeachers() {


if(!teacherTable) {
  return;
}

  teacherTable.innerHTML = "";

  teacherInfo.forEach((teacher, index) => {
    const teacherRow = createTeacherRow(teacher, index);
    console.log(teacherRow);
    teacherTable.appendChild(teacherRow);
  });

}

function addTeacher(enter) {
  event.preventDefault();
  const teacherName = event.target.elements.teacherName.value;
  const teacherEx = parseInt(event.target.elements.teacherEx.value);
  const teacherSubj = event.target.elements.teacherSubj.value;

  const newTeacher = {teacherName, teacherEx, teacherSubj}
  teacherInfo.push(newTeacher);

  console.log("New teacher added:", newTeacher);
  
  displayTeachers();
  event.target.reset();
  displayCourseTeacherOptions();
}


displayTeachers();

if(teacherForm) {
  teacherForm.addEventListener("submit", (enter) => {
  addTeacher(enter);
  });
}

function addTeacherSubj(teacherInfo){
  var click = document.getElementById("teacherInfo");  
         if(click.style.display ==="none") {  
            click.style.display ="block";  
         } else {  
            click.style.display ="none";  
         }   


  }

const courseForm = document.getElementById("courseForm");

// function addNewSubj(event) {
//   event.preventDefault();
//   const newSubj= event.target.elements.newSubj.value;
//   const teacherName = event.target.elements.teacherName.value;

//   const teacherIndex = parseInt(courseTeacher);
//   const selectedTeacher = teacherInfo.filter((teacher, index) => index === teacherIndex)[0];
//     selectedTeacher.concat("<br>", newSubj)

//   console.log("Teacher learned new subject:", selectedTeacher);
  
//   event.target.reset();
// }



function displayCourseTeacherOptions() {
  const courseTeacherSelectElement = document.getElementById('courseTeacher');

  const defaultOption = document.createElement('option');//Creates the default dropdown option
  defaultOption.selected = true; //makes the default option to be the first o be selected when the page opens
  defaultOption.disabled = true; //Makes it impossible for the user to select this option 
  defaultOption.textContent = 'Select a teacher' // Text to be displayed
  courseTeacherSelectElement.innerHTML = null; //Why is this one here
  courseTeacherSelectElement.appendChild(defaultOption); //Links this dropdown option to the dropdown menu

  teacherInfo.forEach((teacher, index) => {
    const optionElement = document.createElement('option');

    optionElement.value = index.toString();
    optionElement.textContent = teacher.teacherName;

    courseTeacherSelectElement.appendChild(optionElement);
  });
}

if(courseForm){

displayCourseTeacherOptions();

}

function addCourse(event) {
  event.preventDefault();
  const courseName = event.target.elements.courseName.value;
  const courseTeacher = event.target.elements.courseTeacher.value;

const teacherIndex = parseInt(courseTeacher);
  const selectedTeacher = teacherInfo.filter((teacher, index) => index === teacherIndex)[0];

  console.log(selectedTeacher[0])
  const newCourse = {courseName, selectedTeacher};
  courseInfo.push(newCourse);

  console.log("New course added:", newCourse);
  
  // displayTeachers();
  event.target.reset();
}


if(courseForm) {
  courseForm.addEventListener("submit", (enter) => {
  addCourse(enter);
  });
}



function displayTeacherOptionsForTeacherLearnedNewSubjectForm() {
    const teacherSelectElement = document.getElementById('teacherLearnedNewSubjectFormTeacherName');

    // Add the default option
    const defaultOption = document.createElement('option');
    defaultOption.selected = true;
    defaultOption.disabled = true;
    defaultOption.textContent = 'Select a teacher'

    teacherSelectElement.innerHTML = null;
    teacherSelectElement.appendChild(defaultOption);


    teacherInfo.forEach((teacher, index) => {
        const optionElement = document.createElement('option');

        optionElement.value = index.toString();
        optionElement.textContent = teacher.teacherName;

        teacherSelectElement.appendChild(optionElement);
    });
}

function displayCourseOptionsForTeacherLearnedNewSubjectForm() {
    const courseSelectElement = document.getElementById('teacherLearnedNewSubjectFormSubjectName');



    // Add the default option
    const defaultOption = document.createElement('option');
    defaultOption.selected = true;
    defaultOption.disabled = true;
    defaultOption.textContent = 'Select a course'

    courseSelectElement.innerHTML = null;
    courseSelectElement.appendChild(defaultOption);


    courseInfo.forEach((course, index) => {
        const optionElement = document.createElement('option');

        optionElement.value = index.toString();
        optionElement.textContent = course.courseName;

        courseSelectElement.appendChild(optionElement);
    });
}

if (teacherForm) {
    displayTeacherOptionsForTeacherLearnedNewSubjectForm();
    displayCourseOptionsForTeacherLearnedNewSubjectForm();
}

function assignCourseToTeacher(event) {
    event.preventDefault();
    const teacherIndex = parseInt(event.target.elements.teacherIndex.value);
    const courseIndex = parseInt(event.target.elements.courseIndex.value);

    const selectedTeacher = teacherInfo.filter((teacher, index) => index === teacherIndex)[0];
    // const courseSelectElement = event.target.elements.teacherLearnedNewSubjectFormSubjectName.value;
    const selectedCourse = courseInfo.filter((course, index) => index === courseIndex)[0];


    selectedTeacher.teacherSubj.push(selectedCourse.courseName);
   


    displayTeachers();
    event.target.reset();



if (teacherLearnedNewSubjectForm) {
    teacherLearnedNewSubjectForm.addEventListener("submit", (event) => {
        assignCourseToTeacher(event);
    });
}


}



