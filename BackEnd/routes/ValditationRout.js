import express from 'express';
import {chacker, destroy} from '../DataB/controllers/ValidationPass.js';

const router = express.Router();

router.post('/:name', chacker);
router.delete('/', destroy);

export default router;
