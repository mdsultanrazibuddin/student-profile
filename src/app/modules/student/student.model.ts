import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

// 2. Create a Schema corresponding to the document interface.
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true,'FirstName is required'],
  },
  middleName: {
    type: String,
    required: [true,'MiddleName is required'],
  },
  lastName: {
    type: String,
    required: [true,'LastName is required'],
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true,'FatherName is required'],
  },
  fatherOccupation: {
    type: String,
    required: [true,'FatherOccupation is required'],
  },
  fatherContactNo: {
    type: String,
    required: [true,'FatherContactNo is required'],
  },
  motherName: {
    type: String,
    required: [true,'MotherName is required'],
  },
  motherOccupation: {
    type: String,
    required: [true,'MotherOccupation is required'],
  },
  motherContactNo: {
    type: String,
    required: [true,'MotherContactNo is required'],
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  Name: {
    type: String,
    required: [true,'LocalGuardianName is required'],
  },
  Occupation: {
    type: String,
    required: [true,'LocalGuardianOccupation is required'],
  },
  ContactNo: {
    type: String,
    required: [true,'LocalGuardianContactNo is required'],
  },
  address: {
    type: String,
    required: [true,'LocalGuardianAddress is required'],
  },
});
const studentSchema = new Schema<Student>({
  id: { type: String, required: true , unique: true },
  name:{
    type: userNameSchema,
    required:true
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not allow'
    },
    required: true
  },
  dateOfBirth: { type: String },
  email: { type: String, required: true , unique:true},
  contactNo: { type: String, required: true , unique:true},
  emergencyContactNo: { type: String, required: true, unique:true },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not allow',
    },
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian:{
    type:  guardianSchema,
    required:true
  },
  localGuardian: {
    type: localGuardianSchema,
    required:true
  },
  profileImage: { type: String },
  isActive:{
    type: String,
    enum: ['active', 'blocked'],
    default: "active",
  } 
});

// 3. Create a Model.

export const StudentModel = model<Student>('Student', studentSchema);
