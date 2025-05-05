import z from "zod";
export declare const createDoctorSchema: z.ZodObject<{
    name: z.ZodString;
    specialist: z.ZodString;
    fees: z.ZodNumber;
    location: z.ZodString;
    experience: z.ZodNumber;
    experienceFields: z.ZodString;
    rating: z.ZodNumber;
    patientsCount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    name: string;
    specialist: string;
    fees: number;
    location: string;
    experience: number;
    experienceFields: string;
    rating: number;
    patientsCount: number;
}, {
    name: string;
    specialist: string;
    fees: number;
    location: string;
    experience: number;
    experienceFields: string;
    rating: number;
    patientsCount: number;
}>;
