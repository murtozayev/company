import express from "express";
import compantController from "../controller/compant.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const companyRoute = express.Router();

companyRoute.post("/add-company", authMiddleware, compantController.addCompany);
companyRoute.get("/get-all", authMiddleware, compantController.getAll);
companyRoute.get("/get-one/:id", authMiddleware, compantController.getOne);
companyRoute.put("/update/:id", authMiddleware, compantController.update);
companyRoute.delete("/delete/:id", authMiddleware, compantController.delete);

export default companyRoute;
