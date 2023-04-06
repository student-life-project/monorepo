import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEventHandler, FC, FormEventHandler } from 'react';
import xw from 'xwind';

import Button from '../Button';
import Input from '../Input';

interface ISearchBar {
  value: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchBar: FC<ISearchBar> = ({ value, onChange, onSubmit }) => (
  <form css={xw`flex w-full`} onSubmit={onSubmit}>
    <Button
      BSecondary
      type="submit"
      css={xw`bg-gray-100 rounded-tr-none rounded-br-none border-gray-200 z-10`}
    >
      <FontAwesomeIcon
        height="1.5em"
        icon={faSearch}
        css={xw`text-secondary-1`}
      />
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
  </form>
);

export default SearchBar;
