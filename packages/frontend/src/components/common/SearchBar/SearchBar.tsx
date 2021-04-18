import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEventHandler, FC, MouseEventHandler } from 'react';
import xw from 'xwind';

import Button from '@/components/Button';
import Input from '@/components/Input';

interface ISearchBar {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const SearchBar: FC<ISearchBar> = ({ value, onChange, onClick }) => {
  return (
    <div css={xw`w-full flex`}>
      <Button
        BSecondary
        css={xw`border-r-0 border-gray-200 z-10`}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faSearch} height="1.5rem" />
      </Button>
      <Input
        css={xw`pl-20 -ml-16`}
        id="search-bar"
        type="search"
        name="search-bar"
        value={value}
        placeholder="Empieza tu búsqueda"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
