const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before(done=>{
    mongoose.set('useUnifiedTopology', true);
    mongoose.connect("mongodb://localhost:27017/mongotube" , {useNewUrlParser:true});

    mongoose.connection
    .once('open', ()=> {
    //console.log('connected')
        done();
    })
    .on('err',(err)=>{
        console.log("Error",err);
    });
});

beforeEach((done)=>{
    mongoose.connection.collections.students.drop(()=>{
        console.log("Droped Students");
        done();
    })
});


