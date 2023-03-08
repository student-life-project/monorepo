/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { css, Global } from '@emotion/react';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useCallback, useEffect, useState } from 'react';
import { FileError, FileRejection, useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';
import xw from 'xwind';

import Button from '@/components/common/Button';
import { AlertMessage } from '@/constants/alertMessage';
import useFileReader from '@/hooks/useFileReader';
import { TFile } from '@/types';
import { createId } from '@/utils/createId';

import ItemFile from './ItemFile';

type TDropzone = {
  files: TFile[];
  setFiles: (files: TFile[]) => void;
};

// TODO: Agregar un loader si es necesario
const Dropzone: FC<TDropzone> = ({ files, setFiles }) => {
  const [filesRejected, setFilesRejected] = useState<FileError[]>([]);
  const { readFile } = useFileReader();

  const onDrop = useCallback(
    async (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      const acceptedPromise = acceptedFiles.map(readFile);

      const accepted = await Promise.all(acceptedPromise).then((buffered) => {
        return buffered.map((fileBuffer, idx) =>
          Object.assign(acceptedFiles[idx], {
            id: createId(),
            url: fileBuffer,
          }),
        );
      });

      const rejected = fileRejections.map(({ errors }) => errors).flat();

      if (accepted.length > 0) {
        accepted.forEach((file) =>
          toast.success(AlertMessage.loaded(file.name)),
        );
      }

      setFilesRejected(rejected);
      setFiles(accepted);
    },
    [setFiles, setFilesRejected, readFile],
  );

  const handleRemoveFile = useCallback(
    (id: number) => {
      setFiles(files.filter((file) => file.id !== id));
      toast.success(AlertMessage.deleted('la imagen'));
    },
    [files, setFiles],
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: '.jpg,.jpeg,.png',
    noKeyboard: true,
    multiple: true,
    maxFiles: 7,
    onDrop,
  });

  // TODO: Eliminar cuando ya no sea necesario.
  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.url));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    for (const key in filesRejected) {
      toast.error(AlertMessage[filesRejected[key].code]);
    }
  }, [filesRejected]);

  return (
    <>
      <Global
        styles={css`
          .dropzone {
            color: #414140;
            font-weight: bold;
          }
        `}
      />

      <section
        css={xw`w-full border-dashed border-2 rounded py-10 px-5 hover:border-primary`}
      >
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <div css={xw`flex items-center flex-col gap-4`}>
            <FontAwesomeIcon icon={faCloudUploadAlt} height="5rem" />
            <p css={xw`text-center`}>
              Formato de archivos permitidos .JPG, .JPEG o .PNG
            </p>
            <Button type="button" FPrimary css={xw`w-44`}>
              Adjuntar archivos
            </Button>
          </div>
        </div>
      </section>

      <ItemFile files={files} handleRemoveFile={handleRemoveFile} />
    </>
  );
};

export default Dropzone;
