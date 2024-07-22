import express from 'express';
const router = express.Router();
import UserController from '../DataB/controllers/UserController.js';

router.get('/',                UserController.allUsers);
router.post('/user',          UserController.addUser);
router.post('/login',                            UserController.loginUserChak,UserController.tokenBulder)
router.patch('/user/:id',    UserController.authenticateToken, UserController.updateUser);
router.delete('/user/:id',   UserController.authenticateToken, UserController.destroy);
router.get('/user/:id',      UserController.authenticateToken,UserController.show);

export default router;