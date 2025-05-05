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
exports.listAllDoctors = exports.AddDoctor = void 0;
const types_1 = require("../types/types");
const prismaClient_1 = require("../db/prismaClient");
const AddDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parsedData = types_1.createDoctorSchema.safeParse(req.body);
        if (!parsedData.success) {
            res.status(400).json({
                error: "Validation error",
                details: parsedData.error.format(),
            });
            return;
        }
        const doctor = yield prismaClient_1.prisma.doctor.create({
            data: {
                name: parsedData.data.name,
                specialist: parsedData.data.specialist,
                fees: parsedData.data.fees,
                location: parsedData.data.location,
                experience: parsedData.data.experience,
                experienceFields: parsedData.data.experienceFields,
                rating: parsedData.data.rating,
                patientsCount: parsedData.data.patientsCount,
            },
        });
        res.json({ message: "Doctor created successfully", id: doctor.id });
    }
    catch (error) {
        console.error("Error creating doctor:", error);
        res.status(500).json({
            error: "Internal Server Error",
            message: "Could not create doctor. Please try again later.",
        });
    }
});
exports.AddDoctor = AddDoctor;
const listAllDoctors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;
        const [doctors, totalCount] = yield Promise.all([
            prismaClient_1.prisma.doctor.findMany({
                skip: offset,
                take: limit,
            }),
            prismaClient_1.prisma.doctor.count(),
        ]);
        const totalPages = Math.ceil(totalCount / limit);
        res.json({
            data: doctors,
            metadata: {
                currentPage: page,
                totalPages,
                totalCount,
            },
        });
    }
    catch (error) {
        console.error("Error fetching doctors:", error);
        res.status(500).json({
            error: "Internal Server Error",
            message: "Could not retrieve doctors. Please try again later.",
        });
    }
});
exports.listAllDoctors = listAllDoctors;
//# sourceMappingURL=index.js.map