// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import { FC } from 'react';
import styled from '@emotion/styled';

type TItemFile = {
  files: any;
};

const Card = styled.div`
  width: 100px;
  height: 100px;

  ${xw`
    p-2
    rounded
    border-2
    box-border
    inline-flex
  `}
`;

const ItemFile: FC<TItemFile> = ({ files }) => (
  <aside css={xw`flex flex-wrap gap-4 mt-10 justify-center`}>
    {files.map((file) => (
      <Card key={file.name}>
        <img
          alt={file.name}
          src={file.preview}
          css={xw`block w-auto h-full`}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </Card>
    ))}
  </aside>
);

export default ItemFile;
