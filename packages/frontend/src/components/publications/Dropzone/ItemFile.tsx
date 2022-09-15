// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import { FC } from 'react';
import styled from '@emotion/styled';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TFile } from '@/types';

type TItemFile = {
  files: TFile[];
  handleRemoveFile?: (id: string | number | any) => void;
};

const Card = styled.div`
  width: 100px;
  height: 100px;

  ${xw`
    p-2
    rounded
    relative
    border-2
    box-border
    inline-flex
  `}
`;

const ItemFile: FC<TItemFile> = ({ files, handleRemoveFile }) => (
  <aside css={xw`flex flex-wrap gap-4 mt-10 justify-center`}>
    {files.map((file) => (
      <Card key={file.name}>
        <img
          alt={file.name}
          src={file.url}
          css={xw`block w-auto h-full`}
          onLoad={() => {
            URL.revokeObjectURL(file.url || ''); // TODO: temporal solo para maquetar.
          }}
        />

        {handleRemoveFile && (
          <button
            type="button"
            css={xw`absolute right-2 bg-white p-1`}
            onClick={() => handleRemoveFile(file.id || 0)}
          >
            <FontAwesomeIcon
              icon={faTrash}
              height="1.2rem"
              css={xw`text-primary`}
            />
          </button>
        )}
      </Card>
    ))}
  </aside>
);

export default ItemFile;
