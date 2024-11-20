// Doi tuong Object 
// Cach 1
var students = new Object();
// Cach 2
var children = {};


// Set up thong tin 

students.name = "a";
students.gender = "b";
students.phone = "c";
students.country = "d";


console.log("students: " + students.name)


// Phuong thuc 1
var student_2 = new Object();
student_2.AddStudents = function(name, age, classs, point) {
  this.name = name;
  this.age = age;
  this.classs = classs;
  this.point = point;
}

// Phuong thuc 2
var students_3 = {
  AddStudents: function (name, age, classs, pointAvg) {
      this.name = name;
      this.age = age;
      this.class = classs;
      this.pointAvg = pointAvg;
  }
};

students_3.AddStudents("Son", 5, "A", 15)

console.log(students_3.name)