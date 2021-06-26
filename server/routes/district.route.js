module.exports = (app) =>{
    const district = require('../controller/district.controller');
    app.get('/district',district.findByState);
    app.post('/district',district.create)
}