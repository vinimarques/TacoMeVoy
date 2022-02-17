import styled from 'styled-components';
import { rgba } from 'polished';
import { CHARCOAL, BLACK, CORNLIGHT, WHITE } from '@assets/style/colors';
import { device } from '@assets/style/media';

export const Wrapper = styled.div`
  max-width: 700px;
  padding: 24px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${WHITE};
  padding: 24px 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 50px;
`;

export const Title = styled.h1`
  font-size: 22px;
  color: ${CHARCOAL};
  font-weight: 600;
  padding-left: 16px;
`;

export const WrapperFilter = styled.div`
  padding-top: 24px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 24px 24px 0 24px;
  box-sizing: border-box;

  @media ${device.laptop} {
    padding: 0;
  }

  input {
    border: solid 1px ${CORNLIGHT};
    font-family: 'Inter', sans-serif;
    height: 50px;
    background-color: ${CORNLIGHT};
    padding: 0 16px;
    border-radius: 5px;
    color: ${BLACK};
    font-size: 16px;
    width: 100%;
    max-width: 500px;
    text-align: center;
    outline: none;
    transition: all .3s;

    &:focus {
      box-shadow: 0 0 16px ${rgba(CHARCOAL, 0.15)};
      border-color: ${rgba(CHARCOAL, 0.15)};
    }
  } 
`;