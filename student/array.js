let students = [

    {

        "firstName": "John",
        "lastName": "Doe"

    },

    {

        "firstName": "Adam",
        "lastName": "Smith"

    }

];

let student=JSON.parse(students);
/*//updatingemail  jonh's age
for (var i = 0; i < students.length; i++) {
    if (students[i].firstName = "john") {
        let students = JSON.stringify({ "age": "23" });
        break;
    }
}*/

//Use module.exports to export an array of students
module.exports = student;