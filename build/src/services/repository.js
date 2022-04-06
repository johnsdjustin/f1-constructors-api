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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamRepository = void 0;
const axios_1 = __importDefault(require("axios"));
class TeamRepository {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    setBaseUrl(baseUrl) {
        this.baseUrl = baseUrl;
    }
    getBaseUrl() {
        return this.baseUrl;
    }
    retrieve(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const resourceId = `${this.baseUrl}/${resource}`;
            const response = yield axios_1.default.get(resourceId);
            const data = response === null || response === void 0 ? void 0 : response.data;
            return data;
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(this.baseUrl);
            const data = response === null || response === void 0 ? void 0 : response.data;
            return data;
        });
    }
}
exports.TeamRepository = TeamRepository;
//# sourceMappingURL=repository.js.map