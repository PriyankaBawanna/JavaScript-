const student = {
  StudentName: "Priyanka",
  StudentBranch: "IT",
  StudentCollege: "DAVV",
  studentPercentage: 70,
};
Object.freeze(student);
//Add new property into object

student.city = "indore";
console.log(student.city);
let x1 = student.hasOwnProperty("city");
console.log(x1);
//modifiy the object property
let x = student.hasOwnProperty("studentPercentage");
console.log(x);
student.studentPercentage = 90; //try to update PErcentage
console.log(student.studentPercentage);
// try to delete some property of object
delete student.StudentName;
console.log(student.StudentName);
