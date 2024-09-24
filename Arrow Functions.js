// a javascrpt program showing the arrow functions(.filter, .map)
const informationTechnologyStudents200level = [
    {name: "Sodolamu Foladyo", cgpa:3.3},  
    {name: "Sodiku Temitayo", cgpa:4.0},  
    {name: "Olateju Rashidat", cgpa:2.9},
    {name: "Olufemi GaiusnOluwaseyi", cgpa:5.0}
]
const getAverageCGPA = (students) => {
    const total_cgpa = students.reduce((sum, student) => sum + student.cgpa,0);
    return total_cgpa / students.length;
};
 const getBelowAverageStudents = (students) => {
    const average_cgpa = getAverageCGPA(students);
    return students
        .filter(student => student.cgpa < average_cgpa)
        .map(student => student.name);
 };
 const getAboveAverageStudents = (students) => {
    const average_cgpa = getAverageCGPA(students);
    return students
        .filter(student => student.cgpa > average_cgpa)
        .map(student => student.name);
 };

 console.log(getBelowAverageStudents(informationTechnologyStudents200level));
 console.log(getAboveAverageStudents(informationTechnologyStudents200level));
