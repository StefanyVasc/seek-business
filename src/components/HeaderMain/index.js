import styled from 'styled-components';
import IconSearch from '../IconSearch';
import LogoMain from '../LogoMain';

const HeaderMain = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 66px;

  & > ${LogoMain}, & > ${IconSearch} {
    width: 24px;
    margin: auto 16px;
  }
`;

export default HeaderMain;
