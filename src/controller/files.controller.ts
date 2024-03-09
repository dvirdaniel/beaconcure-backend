import express, { Request, Response } from 'express';
import * as FilesService from '../service/files.service';
import { File } from '../model/file.interface';

export const filesController = express.Router();

filesController.get("/api/files", async (req: Request, res: Response) => {
  try {
    const files: File[] = await FilesService.getAllFiles();
    res.status(200).send(files);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

filesController.get("/api/files/:name", async (req: Request, res: Response) => {
  try {
    const name = req.params.name;
    const file: File|undefined = await FilesService.getFile(name);
    file ? res.status(200).send(file) : res.status(404).send('No such file exists');
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});