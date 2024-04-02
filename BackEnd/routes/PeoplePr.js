const router = require("express").Router()
// const router = express.Router

const PeopleController = require('C:/Users/haykz/OneDrive/Desktop/Fu_ll/adminka/Datab/controllers/PeopleController.js')

console.log(PeopleController)
router.get('/', PeopleController.lsitof)
router.post('/add',PeopleController.store)
router.patch('/edit',PeopleController.update)
router.delete('/delet',PeopleController.destroy)
router.get('/user/:id',PeopleController.user)


module.exports = router