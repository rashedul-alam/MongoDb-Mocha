const Student = require('../app/student');
const assert = require('assert');


describe('create test', () =>{
    it('create user in db', ()=>{
        //assert(true);
        const sam = new Student({
            name : "Sam"
        });
        sam
        .save()
        .then(()=>{
            assert(!sam.isNew);
        })
        .catch(()=>{
            console.log("Error");
        })

    })
})

//all read


