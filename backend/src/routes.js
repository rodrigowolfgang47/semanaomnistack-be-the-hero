const express = require('express');

const Ongcontroller = require('./controllers/OngController');
const incidentcontroller = require('./controllers/incidentController');
const Profilecontroller = require('./controllers/ProfileController');
const Sessioncontroller = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', Sessioncontroller.create)

routes.get('/ongs', Ongcontroller.index);
routes.post('/ongs', Ongcontroller.create);

routes.get('/profile', Profilecontroller.index);

routes.get('/incidents', incidentcontroller.index);
routes.post('/incidents', incidentcontroller.create);
routes.delete('/incidents/:id', incidentcontroller.delete);

module.exports = routes;