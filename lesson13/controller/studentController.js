let Student = require("../model/student");


let controller = {
     
    getStudents: function(req, res, next){
        let allStudent = Student.getStudents();
        res.status(200).json(allStudent);
    },

    getStudentById: function(req, res, next){
        let id = req.params.id;
        let student = Student.getStudentById(id);
        if(student)
            res.status(200).json(student);
        else
            res.status(404).json({message: "student not found"});
    },

    deleteStudentById: function(req, res, next){
        let id = req.params.id;
        let stduent = Student.deleteStudentByid(id);
        if(stduent)
            res.status(200).json(stduent);
        else
            res.status(404).json({message:"not found"});
    },

    createStudent: function(req, res, next){
        let {id, name, program} = req.body;

        let student = new Student(id, name, program);
        let newCreatedStudent = student.addStudent();
        if(newCreatedStudent)
            res.status(200).json(newCreatedStudent);
        else
            res.status(404).json({message: "already registered.."});
    },

    updateStudent: function (req, res, next) { 
       
        let { oldId, id, name, program } = req.body;
        if (id && name && program) {
            let newStudent = new Student(parseInt(id), name, program);
            newStudent.update(oldId);
            res.status(200).json(newStudent);
        } else {
            res.status(400).json({ message: "provide all data." });
        }
    },

    

    filterByProgram: function (req, res, next) {
        let program = req.query.program;
        let filteredStudents = Student.filterByProgram(program);
        if (filteredStudents.length > 0) {
            res.status(200).json(filteredStudents);
        } else {
            res.status(404).json({ message: "Search not found"});
    }
    },
}
 
module.exports = controller;