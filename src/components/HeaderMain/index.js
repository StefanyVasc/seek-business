import styled from 'styled-components';
import color from '../../styles/settings/colors';
import IconSearch from '../IconSearch';
import LogoMain from '../LogoMain';

const HeaderMain = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 28px;
  background: ${color.background};

  & > ${LogoMain}, & > ${IconSearch} {
    width: 24px;
  }
`;

export default HeaderMain;
