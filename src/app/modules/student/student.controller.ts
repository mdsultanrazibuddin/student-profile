import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent= async ( req: Request, res: Response )=>{
    try{

        const student = req.body

        const result = await StudentServices.createStudentIntoDB(student)


        res.status(200).json({
            success: true,
            message: ' student create successfully',
            data: result
        })

    } catch(err){
        console.log(err);
        
    }
}

export const studentControllers = {
    createStudent
}