import React from 'react';
import HeaderMain from './components/HeaderMain';
import IconFilter from './components/IconFilter';
import IconSearch from './components/IconSearch';
import LogoMain from './components/LogoMain';
import ServiceGuide from './components/ServiceGuide';
import TitleFilter from './components/TitleFilter';

function App() {
  return (
    <>
      <HeaderMain>
        <LogoMain />
        <IconSearch />
      </HeaderMain>

      <ServiceGuide>
        <IconFilter />
        <TitleFilter> Guia de serviços</TitleFilter>
      </ServiceGuide>
    </>
  );
}

export default App;
