import { prisma } from "../../prismaClient";
import { Notes } from "@prisma/client";
import express from "express";
import type { Request, Response } from "express";

export const notes = express.Router();

notes.post("/", async (req: Request, res: Response) => {
  const { title, description } = req.body as Notes;
  const note = await prisma.notes.create({
    data: {
      title,
      description,
    },
  });
  return res.json(note);
});

notes.get("/", async (_req: Request, res: Response) => {
  const notes = await prisma.notes.findMany();
  return res.json(notes);
});

notes.get("/:id", async (req: Request, res: Response) => {
  const note = await prisma.notes.findFirst({ where: { id: +req.params.id } });
  return res.json(note);
});
