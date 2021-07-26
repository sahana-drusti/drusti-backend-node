const express = require('express');
const parser = require('body-parser');
const bodyParser = require('body-parser');
const dbconfig = require('./config/db.config');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.get('/',(req,res) =>{
    res.json({"message":"hello world"});
});

require('./routes/state.route.js')(app);
require('./routes/district.route.js')(app);
require('./routes/users.router')(app);
require('./routes/address.route')(app);
require('./routes/student.route')(app);
require('./routes/faculty.route')(app);
require('./routes/parent.route')(app);

app.listen(3000, () =>{
    console.log('server listening to posrt 3000');
});

mongoose.Promise = global.Promise;
    
mongoose.connect(dbconfig.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() =>{
    console.log("successfully connected to mongoose");
}).catch(err =>{
    console.log('Error connecting db');
    process.exit();
})