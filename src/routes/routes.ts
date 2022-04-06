import express from 'express';
import { getAllTeams } from '../controllers/getAllTeams';
import { getTeam } from '../controllers/getTeam';

export const router = express.Router();

router.use('/teams/:team', getTeam);
router.use('/teams', getAllTeams);
