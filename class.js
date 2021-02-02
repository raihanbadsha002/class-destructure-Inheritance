 class StudentInfo {
    constructor(sId, sName, sAge) {
        this.Id = sId;
        this.Name = sName;
        this.Age = sAge;
        this.School = "Narsingdi Govt. School"
    }
};

const student1 = new StudentInfo(1, "MD. Asad mia", 15);
const student2 = new StudentInfo(2, "MD. Sohid mia", 25);
const student3 = new StudentInfo(3, "MD. Rofik mia", 45);
console.log(student1, student2, student3);
