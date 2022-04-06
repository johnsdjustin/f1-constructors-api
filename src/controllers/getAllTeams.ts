import { Request, Response } from 'express';
import { TeamRepository } from '../services/repository';
import { API_BASE } from '../utils/constants';

/**
 * getAllTeams coordinates the request for all teams. It recieves a request,
 * fetches all teams, and returns a response to the user
 * @param req 
 * @param res 
 */
export const getAllTeams = async (req: Request, res: Response) => {
    try{
        const repository = new TeamRepository(API_BASE);
        const data = await repository.retrieveAll();

        res.status(200).json({'message': 'success', 'data': data});
    } catch (err){
        res.status(400).json({'message': 'failure', 'data': []});
    }
}