import styled from 'styled-components';
import { BLACK, CORNLIGHT } from '@assets/style/colors';
import { rgba } from 'polished';

export const Wrapper = styled.div`
  padding-top: 150px;
`;

export const ListItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  padding: 24px 16px;
  border-bottom: solid 1px ${CORNLIGHT};
  color: ${BLACK};
  transition: all .3s;
  font-weight: 400;
  display: flex;
  justify-content: space-between;

  small {
    font-size: 12px;
    font-weight: 200;
  }

  &:hover {
    background-color: ${rgba(CORNLIGHT, 0.3)};
    padding-left: 24px;
    box-shadow: 0 0 16px ${CORNLIGHT};
    cursor: pointer;
    color: #000;
  }
`;

export const NoResult = styled.div`
  font-size: 18px;
  padding: 24px 16px;
  color: ${BLACK};
  font-weight: 600;
  text-align: center;
`;