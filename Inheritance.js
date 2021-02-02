 class Parent {
    constructor() {
        this.fatherName = "Dipjol"
    }
};


class Child extends Parent{
    constructor(Cname) {
        super();
        this.name = Cname;
    }
    getFullName(){
      return this.name + " " +this.fatherName;
    }
};

const baby = new Child("Dhigi");
const baby2 = new Child("Porimoni");
console.log(baby);
console.log(baby2);