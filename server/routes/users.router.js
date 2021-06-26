module.exports = (app) =>{
    const users = require('../controller/users.controller');
    app.post('/users',users.create);
}