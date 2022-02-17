import styled from 'styled-components';
import { BLACK, WHITE, CORNLIGHT } from '@assets/style/colors';
import { rgba } from 'polished';
import { device } from '@assets/style/media';

import iconClose from '@assets/img/close.svg';
import iconBacon from '@assets/img/bacon.svg';
import iconBlood from '@assets/img/blood.svg';
import iconSpaguetti from '@assets/img/spaguetti.svg';
import iconLeaf from '@assets/img/leaf.svg';
import iconCow from '@assets/img/cow.png';
import iconFire from '@assets/img/fire.svg';

const icon = {
  close: iconClose,
  bacon: iconBacon,
  blood: iconBlood,
  cow: iconCow,
  leaf: iconLeaf,
  spaguetti: iconSpaguetti,
  fire: iconFire,
};

const size = {
  mobile: {
    icon: {
      width: '30px',
      height: '30px'
    },
    thumb: {
      width: '40px',
      height: '40px'
    }
  },
  desk: {
    icon: {
      width: '30px',
      height: '30px'
    },
    thumb: {
      width: '60px',
      height: '60px'
    }
  }
};

export const Wrapper = styled.div`
  background-color: ${rgba(BLACK, .75)};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  ${props => props.visible && `opacity: 1; pointer-events: visible;`}
  transition: all .3s;
`;

export const Container = styled.div`
  background-color: ${WHITE};
  max-width: 700px;
  width: 100%;
  padding: 16px;
  border-radius: 5px;
  position: relative;
  height: 100%;
  box-sizing: border-box;

  @media ${device.laptop} {
    padding: 32px;
    height: auto;
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 24px;
  cursor: pointer;
`;

export const Icon = styled.div`
  display: block;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => icon[props.name]});
  ${props => size['mobile'][props.size]}

  @media ${device.laptop} {
    ${props => size['desk'][props.size]}
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;
  padding-right: 50px;

  @media ${device.laptop} {
    font-size: 32px;
    line-height: 48px;
  }
`;

export const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 200;

  @media ${device.laptop} {
    font-size: 18px;
  }
`;

export const Table = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  border: solid 1px ${CORNLIGHT};
  box-sizing: border-box;
`;

export const TableItem = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
  border: solid 1px ${CORNLIGHT};

  @media ${device.laptop} {
    padding: 24px;
  }
`;

export const TableItemTitle = styled.div`
  display: flex;
  align-items: center;

  span {
    display: block;
    font-size: 14px;
    font-weight: bold;
    padding-left: 12px;

    @media ${device.laptop} {
      font-size: 18px;      
    }
  }
`;

export const TableItemDescription = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 16px;

  @media ${device.laptop} {
    font-size: 24px;
  }
`;

