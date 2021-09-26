const express = require('express');
const router = express.Router();
const user = require('../server/user');

router.get('/register', user.list);

router.post('/userAdd', user.save);

module.exports = router;