import { Schema, model, connect } from 'mongoose';


// student's interface
export type Guardian = {
    fatherName:string;
    fatherOccupation:string;
    fatherContactNo:string;
    motherName:string;
    motherOccupation:string;
    motherContactNo:string;
}

export type LocalGuardian= {
    Name:string;
    Occupation:string;
    ContactNo:string;
    address: string;
}
export type UserName ={
    firstName: string;
    middleName: string;
    lastName: string;
}

export type Student = {
    id: string;
    name: UserName;
    gender: 'male'| 'female';
    dateOfBirth?:string;
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup:"A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    presentAddress:string;
    permanentAddress: string;
    guardian: Guardian;
    localGuardian: LocalGuardian;
    profileImage?: string;
    isActive: 'active'| 'inactive'

  }