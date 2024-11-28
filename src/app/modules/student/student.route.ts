import express from 'express';
import { studentControllers } from './student.controller';

const router = express.Router();
// create data
router.post('/create-student', studentControllers.createStudent);
// get all data
router.get('/', studentControllers.getAllStudent);
// get single data
router.get('/:studentId', studentControllers.getSingleStudent);

export const studentRoute = router;
