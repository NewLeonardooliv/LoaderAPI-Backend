"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const swagger_json_1 = __importDefault(require("./swagger.json"));
const app = (0, express_1.default)();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    app.use((0, cors_1.default)());
    next();
});
app.use(express_1.default.json());
app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use(routes_1.router);
const PORT = 8000;
app.listen(PORT, () => console.log(`Servidor Online ON PORT ${PORT}`));
