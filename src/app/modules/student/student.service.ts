import { Student } from './student.interface';
import { StudentModel } from './student.model';

// create all data
const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};
// get all data
const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
// get single data
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
