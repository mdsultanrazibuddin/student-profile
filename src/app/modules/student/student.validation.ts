

import Joi from 'joi';

// UserName Schema
const userNameSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .regex(/^[a-zA-Z]+$/)
    .required()
    .messages({
      'string.base': 'FirstName must be a string.',
      'string.max': 'FirstName cannot be more than 20 characters.',
      'string.empty': 'FirstName is required.',
      'string.pattern.base': 'FirstName must contain only alphabetic characters.',
    }),
  middleName: Joi.string()
    .trim()
    .required()
    .messages({
      'string.base': 'MiddleName must be a string.',
      'string.empty': 'MiddleName is required.',
    }),
  lastName: Joi.string()
    .trim()
    .required()
    .messages({
      'string.base': 'LastName must be a string.',
      'string.empty': 'LastName is required.',
    }),
});

// Guardian Schema
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().trim().required().messages({
    'string.empty': 'FatherName is required.',
  }),
  fatherOccupation: Joi.string().trim().required().messages({
    'string.empty': 'FatherOccupation is required.',
  }),
  fatherContactNo: Joi.string().trim().required().messages({
    'string.empty': 'FatherContactNo is required.',
  }),
  motherName: Joi.string().trim().required().messages({
    'string.empty': 'MotherName is required.',
  }),
  motherOccupation: Joi.string().trim().required().messages({
    'string.empty': 'MotherOccupation is required.',
  }),
  motherContactNo: Joi.string().trim().required().messages({
    'string.empty': 'MotherContactNo is required.',
  }),
});

// Local Guardian Schema
const localGuardianValidationSchema = Joi.object({
  Name: Joi.string().trim().required().messages({
    'string.empty': 'LocalGuardianName is required.',
  }),
  Occupation: Joi.string().trim().required().messages({
    'string.empty': 'LocalGuardianOccupation is required.',
  }),
  ContactNo: Joi.string().trim().required().messages({
    'string.empty': 'LocalGuardianContactNo is required.',
  }),
  address: Joi.string().trim().required().messages({
    'string.empty': 'LocalGuardianAddress is required.',
  }),
});

// Student Schema
const studentValidationSchema = Joi.object({
  id: Joi.string().trim().required().messages({
    'string.empty': 'ID is required.',
  }),
  name: userNameSchema.required().messages({
    'any.required': 'Name is required.',
  }),
  gender: Joi.string()
    .valid('male', 'female')
    .required()
    .messages({
      'any.only': '{#value} is not allowed.',
      'string.empty': 'Gender is required.',
    }),
  dateOfBirth: Joi.string().messages({
    'string.base': 'Date of Birth must be a string.',
  }),
  email: Joi.string()
    .trim()
    .email()
    .required()
    .messages({
      'string.empty': 'Email is required.',
      'string.email': '{#value} is not a valid email address.',
    }),
  contactNo: Joi.string().trim().required().messages({
    'string.empty': 'ContactNo is required.',
  }),
  emergencyContactNo: Joi.string().trim().required().messages({
    'string.empty': 'EmergencyContactNo is required.',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .messages({
      'any.only': '{#value} is not allowed.',
    }),
  presentAddress: Joi.string().trim().required().messages({
    'string.empty': 'PresentAddress is required.',
  }),
  permanentAddress: Joi.string().trim().required().messages({
    'string.empty': 'PermanentAddress is required.',
  }),
  guardian: guardianValidationSchema.required().messages({
    'any.required': 'Guardian information is required.',
  }),
  localGuardian: localGuardianValidationSchema.required().messages({
    'any.required': 'Local Guardian information is required.',
  }),
  profileImage: Joi.string().messages({
    'string.base': 'ProfileImage must be a string.',
  }),
  isActive: Joi.string()
    .valid('active', 'blocked')
    .default('active')
    .messages({
      'any.only': '{#value} is not allowed.',
    }),
});

export default studentValidationSchema;
