import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student.interface';

// 2. Create a Schema corresponding to the document interface.
const userNameSchema = new Schema <UserName>({
    firstName:{ 
            type: String,
            required: true 
    },
    middleName:{ 
        type: String,
        required: true 
    },
    lastName:{ 
    type: String,
    required: true 
    },
})

const guardianSchema = new Schema <Guardian>({
    fatherName:{ 
        type: String,
        required: true 
       },
    fatherOccupation:{ 
        type: String,
        required: true 
       },
    fatherContactNo:{ 
        type: String,
        required: true 
       },
    motherName:{ 
        type: String,
        required: true 
       },
    motherOccupation:{ 
        type: String,
        required: true 
       },
    motherContactNo:{ 
        type: String,
        required: true 
       },
})

const localGuardianSchema = new Schema <LocalGuardian> ({
    
        Name:{ 
            type: String,
            required: true 
           },
        Occupation:{ 
            type: String,
            required: true 
           },
        ContactNo:{ 
            type: String,
            required: true 
           },
        address: { 
            type: String,
            required: true 
           },
    
})
const studentSchema = new Schema<Student>({
    name: userNameSchema,
    gender:['male', 'female'],
    dateOfBirth:{ type: String},
    email: { type: String,required: true },
    contactNo: { type: String,required: true },
    emergencyContactNo: { type: String,required: true },
    bloodGroup:["A+" , "A-" , "B+" , "B-" , "AB+" , "AB-" , "O+" , "O-"],
    presentAddress:{ type: String,required: true },
    permanentAddress: { type: String,required: true },
    guardian:guardianSchema,
    localGuardian:localGuardianSchema,
    profileImage:{ type: String},
    isActive: ['active', 'blocked']


  });
  
  // 3. Create a Model.
  
 export const StudentModel = model<Student>('Student', studentSchema);
  