import express from 'express';
import UserController from '../../controllers/User/user.controller';

const userController = new UserController();
const router = express.Router();


router.get('/', userController.getUser);
router.post('/', userController.postUserProfile);

export default router;
