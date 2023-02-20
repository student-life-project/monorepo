import { HttpException, HttpStatus } from '@nestjs/common';
import { FileExtension, FileTypeResult, fromFile, MimeType } from 'file-type';
import { existsSync, mkdirSync, unlinkSync } from 'fs';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { v4 as uuid } from 'uuid';

const MEGABYTE = 1024 * 1024;
const MAX_FILE_SIZE = 20;

export const multerConfig = {
  base_path: process.env.UPLOAD_LOCATION_BASE_PATH ?? 'public',
  dest:
    process.env.UPLOAD_LOCATION ??
    join(process.env.UPLOAD_LOCATION_BASE_PATH ?? 'public', 'rental-places'),
};

const allowedFileExtensions: FileExtension[] = ['png', 'jpg'];
const allowedMimeTypes: MimeType[] = ['image/png', 'image/jpeg'];

export const saveImageToStorage = {
  limits: {
    fileSize: process.env.MAX_FILE_SIZE
      ? parseInt(process.env.MAX_FILE_SIZE, MAX_FILE_SIZE) * MEGABYTE
      : MAX_FILE_SIZE * MEGABYTE,
  },
  storage: diskStorage({
    destination: (
      _req: any,
      _file: any,
      cb: (arg0: null, arg1: any) => void,
    ) => {
      const uploadPath = multerConfig.dest;
      // Create folder if doesn't exist
      if (!existsSync(uploadPath)) {
        mkdirSync(uploadPath, { recursive: true });
      }
      cb(null, uploadPath);
    },
    filename: (
      _req: any,
      file: { originalname: any },
      cb: (arg0: null, arg1: string) => void,
    ) => {
      cb(null, `${uuid()}${extname(file.originalname)}`);
    },
  }),
  fileFilter: (
    _req: any,
    file: {
      fieldname: string;
      originalname: string;
      encoding: string;
      mimetype: MimeType;
      size: number;
      destination: string;
      filename: string;
      path: string;
      buffer: Buffer;
    },
    cb: (arg0: HttpException | null, arg1: boolean) => void,
  ) => {
    if (!allowedMimeTypes.includes(file.mimetype)) {
      cb(
        new HttpException(
          `Unsupported file type ${extname(file.originalname)}`,
          HttpStatus.BAD_REQUEST,
        ),
        false,
      );
    }

    cb(null, true);
  },
};

export const getFullPath = (filename: string): string => {
  const imagesFolderPath = join(process.cwd(), multerConfig.dest);
  return join(`${imagesFolderPath}/${filename}`);
};

export const isSafeFileExtension = async (
  filename: string,
): Promise<boolean> => {
  const metadata: FileTypeResult | undefined = await fromFile(
    getFullPath(filename),
  );
  if (!metadata) return false;
  const isFileTypeLegit = allowedFileExtensions.includes(metadata.ext);
  const isMimeTypeLegit = allowedMimeTypes.includes(metadata.mime);
  return isFileTypeLegit && isMimeTypeLegit;
};

export const removeFile = (filename: string): void => {
  try {
    unlinkSync(getFullPath(filename));
  } catch (err) {
    console.error(err);
  }
};

export const asyncFilter = async (arr: Array<any>, predicate: any) =>
  Promise.all(arr.map(predicate)).then((results) =>
    arr.filter((_v, index) => results[index]),
  );
