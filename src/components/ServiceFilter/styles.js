import styled from 'styled-components';
import color from '../../styles/settings/colors';
import IconFilter from '../IconFilter';

export const ServiceFilterStyle = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;
  background: ${color.darkness};
  height: 40px;

  & > ${IconFilter} {
    margin: auto 17px;
  }
`;

export const Label = styled.p`
  color: ${color.tertiary};
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 1px;
`;
