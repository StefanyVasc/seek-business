import styled from 'styled-components';
import IconSearch from '../IconSearch';
import LogoMain from '../LogoMain';

const HeaderMain = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 28px;

  & > ${LogoMain}, & > ${IconSearch} {
    width: 24px;
    /* margin: auto 16px; */
  }
`;

export default HeaderMain;
