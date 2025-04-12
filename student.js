var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    Student.prototype.getId = function () {
        return this.id;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    return Student;
}());
var Result = /** @class */ (function () {
    function Result(studentId, subject, score) {
        this.studentId = studentId;
        this.subject = subject;
        this.score = score;
    }
    Result.prototype.getStudentId = function () {
        return this.studentId;
    };
    Result.prototype.getSubject = function () {
        return this.subject;
    };
    Result.prototype.getScore = function () {
        return this.score;
    };
    return Result;
}());
var Database = /** @class */ (function () {
    function Database() {
        this.students = [];
        this.results = [];
    }
    Database.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    Database.prototype.addResult = function (result) {
        this.results.push(result);
    };
    Database.prototype.getStudentResults = function (studentId) {
        return this.results.filter(function (result) { return result.getStudentId() === studentId; });
    };
    Database.prototype.getAllStudents = function () {
        return this.students;
    };
    Database.prototype.getAllResults = function () {
        return this.results;
    };
    return Database;
}());
// Create a database instance
var db = new Database();
// Create students
var student1 = new Student(1, "Spandan Deb");
var student2 = new Student(2, "Ram Palan");
// Add students to the database
db.addStudent(student1);
db.addStudent(student2);
// Create results for students
var result1 = new Result(1, "Math", 90);
var result2 = new Result(1, "Science", 85);
var result3 = new Result(2, "Math", 95);
var result4 = new Result(2, "Science", 80);
// Add results to the database
db.addResult(result1);
db.addResult(result2);
db.addResult(result3);
db.addResult(result4);
// Retrieve and display results for a student
var student1Results = db.getStudentResults(1);
console.log("Results for ".concat(student1.getName(), ":"));
student1Results.forEach(function (result) {
    console.log("Subject: ".concat(result.getSubject(), ", Score: ").concat(result.getScore()));
});
// Retrieve and display all students and their results
console.log("\nAll Students and Their Results:");
db.getAllStudents().forEach(function (student) {
    var results = db.getStudentResults(student.getId());
    console.log("Student: ".concat(student.getName()));
    results.forEach(function (result) {
        console.log("Subject: ".concat(result.getSubject(), ", Score: ").concat(result.getScore()));
    });
});
