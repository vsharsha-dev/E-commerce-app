import express from 'express';
import {registerController, loginController, testController} from '../controllers/authController.js';
import { requireSignIn, isAdmin } from '../middlewares/authMiddleware.js';

// Router object
const router = express.Router();

// Routing
// REGISTER || METHOD POST
router.post('/register', registerController)

// LOGIN || METHOD POST
router.post('/login', loginController)

// Test routes
router.get('/test', requireSignIn, isAdmin, testController)

export default router;

