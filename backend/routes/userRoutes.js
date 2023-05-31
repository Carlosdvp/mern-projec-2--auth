import express from 'express';
const router = express.Router();
import { 
  authUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile 
} from '../controllers/userController.js';
import { protectRoute } from '../middleware/authMiddleware.js';

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
  .route('/profile')
  .get(protectRoute, getUserProfile)
  .put(protectRoute, updateUserProfile);

export default router;
