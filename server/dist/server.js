"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
require("dotenv");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var api_1 = require("./api");
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use("/api", api_1.api);
app.listen(process.env.SERVER_PORT, function () {
    return console.log("Server started on port ".concat(process.env.SERVER_PORT));
});
//# sourceMappingURL=server.js.map