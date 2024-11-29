import { Schema, model } from 'mongoose';
import validator from 'validator';
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
    trim:true,
    maxlength: [20, 'FirstName can not be more than 20 characters'],
    validate:{
      validator: (value) => validator.isAlpha(value),
      message: '{VALUE} is wrong'
    }
  },
  middleName: {
    type: String,
    required: [true,'MiddleName is required'],
    trim:true,
  },
  lastName: {
    type: String,
    required: [true,'LastName is required'],
    trim:true,
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true,'FatherName is required'],
    trim:true,
  },
  fatherOccupation: {
    type: String,
    required: [true,'FatherOccupation is required'],
    trim:true,
  },
  fatherContactNo: {
    type: String,
    required: [true,'FatherContactNo is required'],
    trim:true,
  },
  motherName: {
    type: String,
    required: [true,'MotherName is required'],
    trim:true,
  },
  motherOccupation: {
    type: String,
    required: [true,'MotherOccupation is required'],
    trim:true,
  },
  motherContactNo: {
    type: String,
    required: [true,'MotherContactNo is required'],
    trim:true,
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  Name: {
    type: String,
    required: [true,'LocalGuardianName is required'],
    trim:true,
  },
  Occupation: {
    type: String,
    required: [true,'LocalGuardianOccupation is required'],
    trim:true,
  },
  ContactNo: {
    type: String,
    required: [true,'LocalGuardianContactNo is required'],
    trim:true,
  },
  address: {
    type: String,
    required: [true,'LocalGuardianAddress is required'],
    trim:true,
  },
});
const studentSchema = new Schema<Student>({
  id: { type: String, required: true ,  unique: true  },
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
  email: { 
    type: String,
    required: true ,
    unique:true, trim:true,
    validate:{
      validator: (value) => validator.isEmail(value),
      message: '{VALUE} is wrong'
    }
  },
  contactNo: { type: String, required: true , unique:true, trim:true,},
  emergencyContactNo: { type: String, required: true, unique:true, trim:true, },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not allow',
    },
  },
  presentAddress: { type: String, required: true, trim:true, },
  permanentAddress: { type: String, required: true, trim:true, },
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
