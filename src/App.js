import React from 'react';
import HeaderMain from './components/HeaderMain';
import IconFilter from './components/IconFilter';
import IconSearch from './components/IconSearch';
import LogoMain from './components/LogoMain';

function App() {
  return (
    <>
      <HeaderMain>
        <LogoMain />
        <IconSearch />
      </HeaderMain>
      <IconFilter />
    </>
  );
}

export default App;
