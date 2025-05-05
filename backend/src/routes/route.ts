import { Router } from "express";
import { AddDoctor, listAllDoctors } from "../controller";

export const router:Router = Router();

router.post("/", AddDoctor);

router.get("/", listAllDoctors);
