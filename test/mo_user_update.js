const Student = require('../app/student');
const assert = require('assert');

describe("Update test",()=>{
    let updater;

    beforeEach((done)=>{
        updater = new Student({name : "Updater"})
        updater.save()
            .then(()=>{done()})
    });

    it("Set n Save test",(done)=>{
        updater.set( 'name', "Update Updater");
        updater.save()
        .then(()=>Student.findById(updater._id))
        .then((student)=>{
            assert(student.name == "Update Updater");
            done();
        })
    })
})