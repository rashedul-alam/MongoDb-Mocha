const Student = require('../app/student');
const assert = require('assert');


describe("Delete test" , ()=>{
    let deleter;

    beforeEach((done)=>{
        deleter = new Student({
            name:"Deleter"
        })
        deleter.save()
        .then(()=>{
            done();
        })
        .catch(()=>{
            console.log("ERROR in Delete");
        });
    });

    it("Delete a usre", (done)=>{
        Student.findByIdAndDelete(deleter._id)
        .then(()=>{
            student = Student.findOne({name: "Deleter"});
            return student;
        })
        .then((student)=>{
            assert(student === null);
            done();
        })
    })
});