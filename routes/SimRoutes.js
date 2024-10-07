const express = require('express');
const router = express.Router();
const { activateSim, deactivateSim, getSimDetails} = require('../controllers/simController');
const validateSimInput=require('../middleware/validateSimInput');

router.post('/activate', validateSimInput,activateSim);
router.post('/deactivate', validateSimInput,deactivateSim);
router.get('/sim-details/:simNumber', getSimDetails);

module.exports = router;