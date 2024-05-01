import express, { Request, Response, NextFunction } from "express";
import { CreateVendorInput } from "../dto";

export const CreateVendor = async (req: Request, res: Response, next: NextFunction) => {
  const { ownerName, name, email, pinCode, address, phone, foodType, password } = <CreateVendorInput>req.body;

  return res.json({ ownerName, name, email, pinCode, address, phone, foodType, password });
};

export const GetVendor = async (req: Request, res: Response, next: NextFunction) => {};

export const EditVendor = async (req: Request, res: Response, next: NextFunction) => {};

export const DeleteVendor = async (req: Request, res: Response, next: NextFunction) => {};
