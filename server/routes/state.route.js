module.exports = (app) =>{
    const state = require('../controller/state.controller');
    
    app.get('/states',state.findAll);
    app.post('/state',state.create);
}