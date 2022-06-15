/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { css, Global } from '@emotion/react';
import { FC, useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';
import xw from 'xwind';

import Button from '@/components/common/Button';
import { AlertMessage } from '@/constants/alertMessage';
import { createId } from '@/utils/createId';

import ItemFile from './ItemFile';

const Dropzone: FC = () => {
  const [files, setFiles] = useState<any>([]);
  const [filesRejected, setFilesRejected] = useState<any>([]);

  const onDrop = useCallback(
    (acceptedFiles, fileRejections) => {
      const accepted = acceptedFiles.map((file) =>
        Object.assign(file, {
          id: createId(),
          preview: URL.createObjectURL(file),
        }),
      );

      const rejected = fileRejections.map(({ errors }) => errors).flat();

      if (accepted.length > 0) {
        accepted.forEach((file) =>
          toast.success(AlertMessage.loaded(file.name)),
        );
      }

      setFilesRejected(rejected);
      setFiles(accepted);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setFiles, setFilesRejected],
  );

  const handleRemoveFile = useCallback(
    (id: number) => {
      setFiles(files.filter((file) => file.id !== id));
      toast.success(AlertMessage.deleted('la imagen'));
    },
    [files],
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: '.jpg,.jpeg,.png',
    noKeyboard: true,
    multiple: true,
    maxFiles: 7,
    onDrop,
  });

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
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
