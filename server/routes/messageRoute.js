const {
    addMessage,
    getAllMessage
} = require('../controllers/messageController')

const router = require('express').Router()

router.post('/getmsg',getAllMessage)
router.post('/addmsg',addMessage)

module.exports = router