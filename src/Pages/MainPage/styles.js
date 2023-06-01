import styled from 'styled-components';
import { Col, Row } from 'antd';
import { SocialIcon } from 'react-social-icons';

import palette from 'palette';

export const LayoutRow = styled(Row)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  @media (max-width: 992px) {
    display: block;
    margin-top: 0;
    padding-bottom: 0;
  }
`;

export const SocialsRow = styled(Row)`
  margin-top: 30px;
  padding-bottom: 20px;
`;

export const StyledImageCol = styled(Col)`
  background-image: linear-gradient(
      to bottom,
      transparent 75%,
      ${(props) => (props.light ? palette.white : palette.black)}
    ),
    url('/my-links-page/assets/red-face-avatar.jpg');
  height: 458px;
  background-size: cover;
  background-position-x: center;
  border-radius: 12px 12px 0 0;

  @media (max-width: 480px) {
    border-radius: 0;
  }
`;

export const CardCol = styled(Col)`
  background-color: ${(props) => (props.light ? palette.white : palette.black)};
  border-radius: 12px;
  padding: 28px 0 0 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  min-height: 600px;

  @media (max-width: 480px) {
    border-radius: 0;
    padding: 0;
    min-height: 100vh;
    margin-top: 0;
  }
`;

export const StyledIconCol = styled(Col)`
  width: fit-content;
  margin: 0 auto 0 auto;
`;

export const StyledSocialIcon = styled(SocialIcon)`
  ${({ color }) =>
    color &&
    `
    .social-svg:hover {
      .social-svg-icon {
        fill: ${color} !important;
    }
  }
  `}
`;

export const StyledImg = styled.img`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  filter: blur(104px);
  opacity: 0.8;
`;

export const SwitchDiv = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;

  @media (max-width: 992px) {
    display: none;
  }
`;
