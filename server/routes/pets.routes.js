const PetController = require('../controllers/pets.controller');

module.exports = (app) => {
    app.get('/api/pets', PetController.index);            //all
    app.get('/api/pet/:id', PetController.show);          //one
    app.post('/api/pet', PetController.create);           //make one
    app.put('/api/pet/:id', PetController.update);        //update
    app.delete('/api/pet/:id', PetController.destroy);    //delete
}