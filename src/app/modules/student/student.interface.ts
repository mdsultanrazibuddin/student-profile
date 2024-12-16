// import { string } from "joi";
import { Model } from "mongoose";

// student's interface
export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TLocalGuardian = {
  Name: string;
  Occupation: string;
  ContactNo: string;
  address: string;
};
export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TStudent = {
  id: string;
  name: TUserName;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImage?: string;
  isActive: 'active' | 'inactive';
};
// for creating a custom static method
export interface StudentModel extends Model<TStudent> {
  isUserExits(id: string): Promise< TStudent | null>


}

// for creating a custom instance method
// export type StudentMethods = {
//   isUserExits(id: string): Promise<TStudent | null>
// }

// export type studentModel = Model<TStudent, Record < string, never>, StudentMethods>;