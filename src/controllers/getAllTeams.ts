import { Request, Response } from 'express';
import { TeamRepository } from '../services/repository';
import { API_BASE } from '../utils/constants';


export const getAllTeams = async (req: Request, res: Response) => {
    try{
        const repository = new TeamRepository(API_BASE);
        const data = await repository.retrieveAll();

        res.status(200).json({'message': 'success', 'data': data});
    } catch (err){
        res.status(400).json({'message': 'failure', 'data': []});
    }
}