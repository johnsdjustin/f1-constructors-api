"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./src/routes/routes");
// Initialize express app
const app = (0, express_1.default)();
const PORT = 3000;
// Integrate routes defined in router with express app
app.use('/', routes_1.router);
// Start API on PORT number
app.listen(PORT, () => {
    console.log(`Server started at http://localhost${PORT}`);
});
//# sourceMappingURL=server.js.map