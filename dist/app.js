"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    req.status(200).send({ message: 'hello, world' });
});
//# sourceMappingURL=app.js.map