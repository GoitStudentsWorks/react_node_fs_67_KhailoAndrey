import styled from 'styled-components';

import bg_mob from '../../images/BackGround/bg_mob.png';
import bg_tab from '../../images/BackGround/bg_tab.png';
import bg_desk from '../../images/BackGround/bg_desk.png';
import bg_mob_retina from '../../images/BackGround/bg_mob_2x.png'; // Изображение для Retina на мобильных устройствах
import bg_tab_retina from '../../images/BackGround/bg_tab_2x.png'; // Изображение для Retina на планшетных устройствах
import bg_desk_retina from '../../images/BackGround/bg_desk_2x.png'; // Изображение для Retina на десктопах

export const Section = styled.section`
position: fixed;
  background-color: var(--main-bckg-clr);
  margin: 0;
  padding: 20px;
  width: 100vw;
  height: 100vh;
  background-repeat: repeat ;
  background-image: url(${bg_mob});

  @media (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
    background-image: url(${bg_mob_retina});
  }

  @media screen and (min-width: 768px) {
    padding: 24px 32px;
    background-image: url(${bg_tab});

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${bg_tab_retina});
    }
  }

  @media screen and (min-width: 1280px) {
    padding: 20px 16px;
    background-image: url(${bg_desk});

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${bg_desk_retina});
    }
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 320px;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    width: 786px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;