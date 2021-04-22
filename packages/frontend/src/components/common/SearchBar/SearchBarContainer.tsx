import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';

import SearchBar from './SearchBar';

const SearchBarContainer = () => {
  const router = useRouter();
  const [value, setValue] = useState('');

  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value);
  };

  const onClick = () => {
    router.push('/rental-places');
  };

  return <SearchBar value={value} onChange={onChange} onClick={onClick} />;
};

export default SearchBarContainer;
