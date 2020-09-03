import styled from 'styled-components';
import IconFilter from '../IconFilter';

export const ServiceFilterStyle = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;
  background: #3a4042;
  height: 40px;

  & > ${IconFilter} {
    margin: auto 17px;
  }
`;

export const Label = styled.p`
  color: #fffcee;
  font-size: 20px;
  font-weight: 300;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 1px;
`;
