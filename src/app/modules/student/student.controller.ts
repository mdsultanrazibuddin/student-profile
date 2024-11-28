import { Request, Response } from 'express';
import { StudentServices } from './student.service';

// create data
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    const result = await StudentServices.createStudentIntoDB(studentData);

    res.status(200).json({
      success: true,
      message: ' student create successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// get all data
const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();

    res.status(200).json({
      success: true,
      message: ' students are retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
// get single data
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: ' students is retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
