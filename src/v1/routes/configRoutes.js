const express = require('express')
const configController = require('../../controllers/configController')
const router = express.Router()
router.get('/configs', configController.getAllConfigs)
router.post('/configs', configController.postConfig)

module.exports = router