import { Request, Response } from 'express';
import { TeamRepository } from '../services/repository';
import { API_BASE } from '../utils/constants'

/**
 * getTeam coordinates the request for a team. It recieves the request,
 * parses information out of the request, fetches the team, and returns
 * a response to the user
 * @param req 
 * @param res 
 */
export const getTeam = async (req: Request, res: Response) => {
    try{
        const {team} = req.params;
        const repository = new TeamRepository(API_BASE);
        const data = await repository.retrieve(team);
        res.status(200).json({'message': 'success', 'data': data});
    } catch (err){
        res.status(400).json({'message': 'failure', 'data': {}});
    }
}