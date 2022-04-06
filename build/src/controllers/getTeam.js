"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeam = void 0;
const repository_1 = require("../services/repository");
const constants_1 = require("../utils/constants");
/**
 * getTeam coordinates the request for a team. It recieves the request,
 * parses information out of the request, fetches the team, and returns
 * a response to the user
 * @param req
 * @param res
 */
const getTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { team } = req.params;
        const repository = new repository_1.TeamRepository(constants_1.API_BASE);
        const data = yield repository.retrieve(team);
        res.status(200).json({ 'message': 'success', 'data': data });
    }
    catch (err) {
        res.status(400).json({ 'message': 'failure', 'data': {} });
    }
});
exports.getTeam = getTeam;
//# sourceMappingURL=getTeam.js.map