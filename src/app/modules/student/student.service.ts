import { TStudent } from './student.interface';
import { Student } from './student.model';

// create all data
const createStudentIntoDB = async (studentData: TStudent) => {
  
  if( await Student.isUserExits(studentData.id)){
    throw new Error ('User already exit')
  }
  const result = await Student.create(studentData);  // built in static method

  // const student = new Student(studentData); //create instance
  // if( await student.isUserExits(studentData.id)){
  //   throw new Error ('User already exit')
  // }

  // const result = await student.save()  //built in instance method
  return result;
};
// get all data
const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};
// get single data
const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
