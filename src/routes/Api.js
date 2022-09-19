const express = require('express');
const router = express.Router();
const apiController = require('../app/controllers/apiController');

router.get('/read', apiController.read);
router.post('/create',apiController.create);

module.exports = router;
