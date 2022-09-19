// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useCallback, useEffect } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';

import { AlertMessage } from '@/constants/alertMessage';
import { TFile } from '@/types';

import Button from '../common/Button';

type TImg = {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
};

type TAvatar = {
  alt: string;
  url: string;
  files?: TFile[];
  showDropzone?: boolean;
  setFiles?: (files: TFile[]) => void;
} & TImg;

const Img = styled.img<TImg>`
  ${xw`
    bg-gray-400
    rounded-full
  `}

  ${({ small }) => small && xw`w-10 h-10`}

  ${({ medium }) => medium && xw`w-32 h-32`}

  ${({ large }) => large && xw`w-52 h-52 sm:w-48 sm:h-48 mb-5`}
`;

const Avatar: FC<TAvatar> = ({
  alt,
  url,
  small,
  medium,
  large,
  files = [],
  showDropzone = false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setFiles = () => {},
}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      const accepted = acceptedFiles.map((file) =>
        Object.assign(file, {
          url: URL.createObjectURL(file),
        }),
      );

      if (accepted.length > 0) {
        toast.success(AlertMessage.loaded(accepted[0].name));
      }

      if (fileRejections.length > 0) {
        toast.error(AlertMessage[fileRejections[0].errors[0].code]);
      }

      setFiles(accepted);
    },
    [setFiles],
  );

  // TODO: Eliminar cuando ya no sea necesario.
  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.url));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: '.jpg,.jpeg,.png',
    noKeyboard: true,
    maxFiles: 1,
    onDrop,
  });

  return (
    <>
      <Img
        alt={alt}
        src={files[0]?.url || url} // TODO: temporal solo para maquetar.
        small={small}
        medium={medium}
        large={large}
        onLoad={() => {
          URL.revokeObjectURL(files[0]?.url || ''); // TODO: temporal solo para maquetar.
        }}
      />

      {!!showDropzone && (
        <div {...getRootProps()} css={xw`mb-5`}>
          <input {...getInputProps()} />
          <Button type="button" BPrimary round>
            <FontAwesomeIcon icon={faCamera} height="1rem" />
          </Button>
        </div>
      )}
    </>
  );
};

export default Avatar;
