const express = require('express');
const router = express.Router();
const { getAllDonors, addDonor } = require('../controllers/donorsController');

router.get('/', getAllDonors);
router.post('/', addDonor);

module.exports = router;