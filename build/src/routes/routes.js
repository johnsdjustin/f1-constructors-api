"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const getAllTeams_1 = require("../controllers/getAllTeams");
const getTeam_1 = require("../controllers/getTeam");
exports.router = express_1.default.Router();
exports.router.use('/teams/:team', getTeam_1.getTeam);
exports.router.use('/teams', getAllTeams_1.getAllTeams);
//# sourceMappingURL=routes.js.map