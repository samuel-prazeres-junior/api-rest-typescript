import { Request, Response } from "express";
import { subjetcRepository } from "../repository/SubjetRepository";

export class SubjectController{
    async create(req: Request, res: Response) {
        const {name} = req.body

        if(!name){
            return res.status(400).json({message: "O nome é obrigatorio"})
        }
        try{
            const newSubject = subjetcRepository.create({name})
            
            await subjetcRepository.save(newSubject) 

            return res.status(201).json(newSubject)
        }catch(error){
            console.log(error)
            return res.status(500).json({message: "Internal Server Error"})
        }
    }
}