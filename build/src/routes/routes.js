"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const getAllTeams_1 = require("../controllers/getAllTeams");
const getTeam_1 = require("../controllers/getTeam");
// Initialize the express router
exports.router = express_1.default.Router();
// This route returns a single team
exports.router.use('/teams/:team', getTeam_1.getTeam);
// This route returns all teams
exports.router.use('/teams', getAllTeams_1.getAllTeams);
//# sourceMappingURL=routes.js.map