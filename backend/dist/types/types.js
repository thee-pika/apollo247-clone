"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDoctorSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createDoctorSchema = zod_1.default.object({
    name: zod_1.default.string(),
    specialist: zod_1.default.string(),
    fees: zod_1.default.number(),
    location: zod_1.default.string(),
    experience: zod_1.default.number(),
    experienceFields: zod_1.default.string(),
    rating: zod_1.default.number(),
    patientsCount: zod_1.default.number(),
});
//# sourceMappingURL=types.js.map