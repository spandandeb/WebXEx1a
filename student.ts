class Student {
    private id: number;
    private name: string;
  
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
  
    public getId(): number {
        return this.id;
    }
  
    public getName(): string {
        return this.name;
    }
  }
  
  class Result {
    private studentId: number;
    private subject: string;
    private score: number;
  
    constructor(studentId: number, subject: string, score: number) {
        this.studentId = studentId;
        this.subject = subject;
        this.score = score;
    }
  
    public getStudentId(): number {
        return this.studentId;
    }
  
    public getSubject(): string {
        return this.subject;
    }
  
    public getScore(): number {
        return this.score;
    }
  }
  
  class Database {
    private students: Student[] = [];
    private results: Result[] = [];
  
    public addStudent(student: Student): void {
        this.students.push(student);
    }
  
    public addResult(result: Result): void {
        this.results.push(result);
    }
  
    public getStudentResults(studentId: number): Result[] {
        return this.results.filter(result => result.getStudentId() === studentId);
    }
  
    public getAllStudents(): Student[] {
        return this.students;
    }
  
    public getAllResults(): Result[] {
        return this.results;
    }
  }
  
  // Create a database instance
  const db = new Database();
  
  // Create students
  const student1 = new Student(1, "Spandan Deb");
  const student2 = new Student(2, "Ram Palan");
  
  // Add students to the database
  db.addStudent(student1);
  db.addStudent(student2);
  
  // Create results for students
  const result1 = new Result(1, "Math", 90);
  const result2 = new Result(1, "Science", 85);
  const result3 = new Result(2, "Math", 95);
  const result4 = new Result(2, "Science", 80);
  
  // Add results to the database
  db.addResult(result1);
  db.addResult(result2);
  db.addResult(result3);
  db.addResult(result4);
  
  // Retrieve and display results for a student
  const student1Results = db.getStudentResults(1);
  console.log(`Results for ${student1.getName()}:`);
  student1Results.forEach(result => {
      console.log(`Subject: ${result.getSubject()}, Score: ${result.getScore()}`);
  });
  
  // Retrieve and display all students and their results
  console.log("\nAll Students and Their Results:");
  db.getAllStudents().forEach(student => {
      const results = db.getStudentResults(student.getId());
      console.log(`Student: ${student.getName()}`);
      results.forEach(result => {
          console.log(`Subject: ${result.getSubject()}, Score: ${result.getScore()}`);
      });
  });
  