import styled from 'styled-components';
import color from '../../styles/settings/colors';
import IconFilter from '../IconFilter';

export const ServiceFilterStyle = styled.section`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background: ${color.darkness};

  & > ${IconFilter} {
    margin-right: 16px;
  }
`;

export const Label = styled.p`
  color: ${color.tertiary};
  font-size: 20px;
`;
