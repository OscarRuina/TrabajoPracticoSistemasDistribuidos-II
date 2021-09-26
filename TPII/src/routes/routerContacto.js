const express = require('express');
const router = express.Router();		//me devuelve rutas en js
const contacto = require('../server/contacto');

router.get('/contact', contacto.list);              //Para traer datos de la tabla contacto
router.post('/addContacto', contacto.guardar);      //Para guardar
router.get('/eliminarContacto/:id', contacto.eliminar); //Para eliminar

module.exports = router;