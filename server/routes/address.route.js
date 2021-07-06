module.exports = (app) =>{
    const address = require('../controller/address.controller');
    app.post('/address',address.create);
    app.get('/address/',address.findByUserId);
    app.put('/address/', address.updateAddress);
    app.delete('/address/',address.delete);
}