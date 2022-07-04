const { Router } = require('express')
const { usersPut, usersGet, userPost, usersDelete, usersPatch } = require('../controllers/users')

const router = Router()

router.get('/', usersGet)
router.post('/', userPost)
router.put('/:id', usersPut)
router.patch('/', usersPatch)
router.delete('/', usersDelete)

module.exports = router
