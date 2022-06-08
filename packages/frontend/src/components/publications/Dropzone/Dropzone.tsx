import { css, Global } from '@emotion/react';
import { FC, useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import xw from 'xwind';

import Button from '@/components/common/Button';

import ItemFile from './ItemFile';

const Dropzone: FC = () => {
  const [files, setFiles] = useState<any>([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const accepted = acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) }),
      );

      setFiles(accepted);
    },
    [setFiles],
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: '.jpg,.jpeg,.png',
    noKeyboard: true,
    multiple: true,
    onDrop,
  });

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      <section css={xw`w-full border-dashed border-2 rounded py-10 px-5`}>
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

      <ItemFile files={files} />
    </>
  );
};

export default Dropzone;
