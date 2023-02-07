import express from 'express';
import {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from '../conrollers/users.controller';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
