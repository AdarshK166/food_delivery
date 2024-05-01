import express, { Request, Response, NextFunction } from "express";
import { CreateVendor, DeleteVendor, EditVendor, GetVendor } from "../controllers/AdminController";

const router = express.Router();

router.post("/vendor", CreateVendor);

router.get("/vendor/id:", GetVendor);

router.patch("/vendor/id:", EditVendor);

router.delete("/vendor", DeleteVendor);

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Hello from AdminRoute" });
});

export { router as AdminRoute };
