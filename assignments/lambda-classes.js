// CODE here for your Lambda Classes

// Person is parent

class Person{
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }

    intro(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
   
}

// Instructor is child of Person

class Instructor extends Person{
    constructor(instructorAttr){
        super(instructorAttr);
        this.name = instructorAttr.name;
        this.age = instructorAttr.age;
        this.location = instructorAttr.location;
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchphrase = instructorAttr.catchphrase;
    }

    demo(subject){
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

// Student is child of Person

class Student extends Person{
    constructor(studentAttr){
        super(studentAttr);
        this.name = studentAttr.name;
        this.age = studentAttr.age;
        this.location = studentAttr.location;
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
        this.grade = studentAttr.grade;
    }

    listsSubjects(){
        return `${this.favSubjects}`;
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

// Project Manager is child of Instructor

class ProjectManagers extends Instructor{
    constructor(projectManagersAttr){
        super(projectManagersAttr);
        this.name = projectManagersAttr.name;
        this.age = projectManagersAttr.age;
        this.location = projectManagersAttr.location;
        this.specialty = projectManagersAttr.specialty;
        this.favLanguage = projectManagersAttr.favLanguage;
        this.catchphrase = projectManagersAttr.catchphrase;
        this.gradClassName = projectManagersAttr.gradClassName;
        this.favInstructor = projectManagersAttr.favInstructor;
    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

// New Objects - Person

const personOne = new Person({
    name: 'Sauron',
    age: 8000,
    location: 'Mordor'
})

const personTwo = new Person({
    name: 'Melkor',
    age: 8500,
    location: 'Middle Earth'
})

// New Objects - Instructor

const instructorOne = new Instructor({
    name: 'Gandalf',
    age: 7000,
    location: 'Middle Earth',
    specialty: 'banishing Balrogs',
    favLanguage: 'Elvish',
    catchPhrase: 'You shall not pass!'
})

const instructorTwo = new Instructor({
    name: 'Elrond',
    age: 5000,
    location: 'Rivendell',
    specialty: 'Holding councils',
    favLanguage: 'Old Elvish',
    catchPhrase: 'Strangers from distant lands, friends of old, you have been summoned here to answer the threat of Mordor.',
})

const instructorThree = new Instructor({
    name: 'Saruman',
    age: 6500,
    location: 'Orthanc',
    specialty: 'making Orcs',
    favLanguage: 'Orcish',
    catchPhrase: 'Against the power of Mordor there can be no victory'
})

// New Objects - Student

const studentOne = new Student({
    name: 'Frodo',
    age: 30,
    location: 'The Shire',
    previousBackground: 'Shire aristocracy',
    className: 'The Hobbits',
    favSubjects: ['rings', 'brandywine', 'elvishArmor', 'Sting'],
    grade: 92
})

const studentTwo = new Student({
    name: 'Samwise',
    age: 28,
    location: 'The Shire',
    previousBackground: 'gardening',
    className: 'The Gaffers',
    favSubjects: ['cooking', 'gardening', 'potatoes', 'poetry', 'Elves'],
    grade: 100
})

const studentThree = new Student({
    name: 'Merry',
    age: 25,
    location: 'The Shire',
    previousBackground: 'Master of Buckland',
    className: 'The Ent Homies',
    favSubjects: ['breakfast', 'secondBreakfast', 'elevensies', 'ents'],
    grade: 68
})

// New Objects - ProjectManagers

const pMOne = new ProjectManagers({
    name: 'Aragorn',
    age: 75,
    location: 'Gondor',
    specialty: 'not dying',
    favLanguage: 'common tongue',
    catchPhrase: 'You cannot wield it. None of us can. The One Ring answers to Sauron alone. It has no other master.'
})

const pMTwo = new ProjectManagers({
    name: 'Legolas',
    age: 212,
    location: 'Woodland Realm',
    specialty: 'wielding Elvish longbow',
    favLanguage: 'Elvish',
    catchPhrase: 'There is a fell voice on the air.'
})

const pMThree = new ProjectManagers({
    name: 'Gimli',
    age: 102,
    location: 'Helms Deep',
    specialty: 'wielding battle axes',
    favLanguage: 'Dwarvish',
    catchPhrase: 'Nobody tosses a dwarf!'
})


// intro method tests

console.log(personOne.intro());
console.log(instructorOne.intro());
console.log(studentOne.intro());
console.log(pMOne.intro());

// demo method tests

console.log(instructorTwo.demo('Mordors power'));
console.log(pMThree.demo('battle axes'));

// grade method tests

console.log(instructorThree.grade(studentOne, `the finer points of Saurons power.`));
console.log(pMTwo.grade(studentThree, `archery`));

// listsSubjects method test

console.log(studentTwo.listsSubjects());
console.log(studentOne.listsSubjects());

// pRAssignments method test

console.log(studentThree.PRAssignment(`Ent riding`));
console.log(studentOne.PRAssignment(`vanishing`));

// sprintChallenge method test

console.log(studentTwo.sprintChallenge(`boiling potatoes`));
console.log(studentOne.sprintChallenge(`trekking to Mordor`));

// standUp method test

console.log(pMOne.standUp(`Fellowship Members`));
console.log(pMThree.standUp(`Helms Deep Defenders`));


// debugsCode method test

console.log(pMTwo.debugsCode(studentThree, `brandywine`));
console.log(pMThree.debugsCode(studentTwo, `dwarvish cuisine`));