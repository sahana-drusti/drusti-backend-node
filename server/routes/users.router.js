module.exports = (app) =>{
    const users = require('../controller/users.controller');
    app.post('/users',users.create);
    app.get('/users/',users.findUser);
    app.put('/users',users.update);
}