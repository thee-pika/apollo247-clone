import z from "zod";

export const createDoctorSchema = z.object({
  name: z.string(),
  specialist: z.string(),
  fees: z.number(),
  location: z.string(),
  experience: z.number(),
  experienceFields: z.string(),
  rating: z.number(),
  patientsCount: z.number(),
});
