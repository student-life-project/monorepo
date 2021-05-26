// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEventHandler, FC, memo, MouseEventHandler } from 'react';

import Button from '@/components/Button';
import Input from '@/components/Input';

interface ISearchBar {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const SearchContent = styled.div`
  ${xw`
    flex
    w-full
  `}
`;

const Icon = styled(FontAwesomeIcon)`
  ${xw`
    text-secondary-1
  `}
`;

const SearchBar: FC<ISearchBar> = ({ value, onChange, onClick }) => (
  <SearchContent>
    <Button
      BSecondary
      onClick={onClick}
      css={xw`bg-gray-100 rounded-tr-none rounded-br-none border-gray-200 z-10`}
    >
      <Icon icon={faSearch} height="1.5rem" />
    </Button>
    <Input
      type="search"
      value={value}
      id="search-bar"
      name="search-bar"
      onChange={onChange}
      css={xw`pl-20 -ml-16`}
      placeholder="Empieza tu búsqueda"
    />
  </SearchContent>
);

export default memo(SearchBar);
