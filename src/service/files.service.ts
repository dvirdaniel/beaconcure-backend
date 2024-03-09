import * as fs from 'fs';
import path from 'path';
import { File } from '../model/file.interface';

const dataFolderPath = path.join(__dirname, '..', '..', 'resources/');
const data = new Map<string, File>();

// Read all JSON files from resources folder and save them to in-memory map
const readAllFiles = (): void => {
    fs.readdirSync(dataFolderPath).forEach(fileName => {
        if (fileName.endsWith('.json')) {
            const fileContent = fs.readFileSync(dataFolderPath + fileName, 'utf8');
            let file: File = JSON.parse(fileContent);
            file.name = fileName;
            data.set(fileName, file);
        }
    });
}

// Initialize the in-memory map when the server starts
readAllFiles();

export const getAllFiles = async (): Promise<File[]> => {
    return Array.from(data.values());
}

export const getFile = async (fileName: string): Promise<File|undefined> => {
    return data.get(fileName);
}