"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const route_1 = require("./routes/route");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/v1/doctor", route_1.router);
const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
    res.send("Server is saying hello");
});
app.listen(PORT, () => console.log("App is listening on ", PORT));
//# sourceMappingURL=index.js.map