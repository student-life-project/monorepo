import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';

import SearchBar from './SearchBar';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const SearchBarContainer = () => {
  const router = useRouter();
  const [value, setValue] = useState('');

  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value);
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    router.push({ pathname: '/rentals', query: { 'search-bar': value } });
  };

  useEffect(() => {
    const url = new URLSearchParams(window.location.search);
    const proxy = new Proxy(url, {
      get: (searchParams, prop: string) => searchParams.get(prop),
    });
    setValue(proxy['search-bar'] || '');
  }, []);

  return <SearchBar value={value} onChange={onChange} onSubmit={onSubmit} />;
};

export default SearchBarContainer;
