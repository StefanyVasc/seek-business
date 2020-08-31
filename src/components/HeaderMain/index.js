import styled from 'styled-components';
import IconSearch from '../IconSearch';
import LogoMain from '../LogoMain';

const HeaderMain = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #3c5268;

  & > ${LogoMain}, & > ${IconSearch} {
    width: 24px;
  }
`;

export default HeaderMain;
