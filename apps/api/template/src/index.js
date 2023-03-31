"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloLeeFung = void 0;
const express_1 = __importDefault(require("express"));
// Boot express
const app = (0, express_1.default)();
const port = 5000;
// Application routing
app.use('/', (req, res, next) => {
    res.status(200).send({ data: 'Hello from Staycay Go Where!' });
});
// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
exports.HelloLeeFung = 23;
