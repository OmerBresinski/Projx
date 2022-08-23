//create an express register router
import express from "express";
import * as Routes from "../routes";

export const api = express.Router();

api.use("/notes", Routes.notes);
