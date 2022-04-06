import express from 'express';
import { getAllTeams } from '../controllers/getAllTeams';
import { getTeam } from '../controllers/getTeam';

// Initialize the express router
export const router = express.Router();

// This route returns a single team
router.use('/teams/:team', getTeam);

// This route returns all teams
router.use('/teams', getAllTeams);
