import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import studentValidationSchema from './student.validation';


// create data
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    // data validation using by Joi
    const {error, value} = studentValidationSchema.validate(studentData)
    const result = await StudentServices.createStudentIntoDB(value);

    if(error) {
      res.status(500).json({
        success: false,
        message: ' something went wrong',
        error: error.details
      });
    }

  

    res.status(200).json({
      success: true,
      message: ' student create successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message ||' something went wrong',
      data: err,
    });
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
    res.status(500).json({
      success: false,
      message: ' something went wrong',
      data: err,
    });
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
    res.status(500).json({
      success: false,
      message: ' something went wrong',
      data: err,
    });
  }
};

export const studentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
