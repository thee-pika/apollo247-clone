import { Request, Response } from "express";
import { createDoctorSchema } from "../types/types";
import { prisma } from "../db/prismaClient";

export const AddDoctor = async (req: Request, res: Response) => {
  try {
    const parsedData = createDoctorSchema.safeParse(req.body);
    if (!parsedData.success) {
      res.status(400).json({
        error: "Validation error",
        details: parsedData.error.format(),
      });
      return;
    }

    const doctor = await prisma.doctor.create({
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
  } catch (error) {
    console.error("Error creating doctor:", error);

    res.status(500).json({
      error: "Internal Server Error",
      message: "Could not create doctor. Please try again later.",
    });
  }
};

export const listAllDoctors = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const offset = (page - 1) * limit;

    const [doctors, totalCount] = await Promise.all([
      prisma.doctor.findMany({
        skip: offset,
        take: limit,
      }),
      prisma.doctor.count(),
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

  } catch (error) {
    console.error("Error fetching doctors:", error);

    res.status(500).json({
      error: "Internal Server Error",
      message: "Could not retrieve doctors. Please try again later.",
    });
  }
};
