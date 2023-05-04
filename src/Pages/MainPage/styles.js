import styled from 'styled-components';
import { Col, Row } from 'antd';

import palette from '../../palette';
import { SocialIcon } from 'react-social-icons';

export const LayoutRow = styled(Row)`
  padding-bottom: 50px;
  min-height: 100vh;

  @media (max-width: 480px) {
    margin-top: 0;
    padding-bottom: 0;
  }
`;

export const SocialsRow = styled(Row)`
  margin-top: 30px;
  padding-bottom: 20px;
`;

export const StyledImageCol = styled(Col)`
  background-image: linear-gradient(to bottom, transparent 80%, ${palette.black}),
    url('/my-links-page/assets/red-face-avatar.jpg');
  background-position: center;
  height: 458px;
  background-size: cover;
  border-radius: 12px;

  @media (max-width: 480px) {
    border-radius: 0;
  }
`;

export const CardCol = styled(Col)`
  background-color: black;
  border-radius: 12px;
  padding: 28px 0 0 0;
  margin-top: 60px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 480px) {
    border-radius: 0;
    padding: 0;
    height: 100vh;
    margin-top: 0;
  }
`;

export const StyledIconCol = styled(Col)`
  width: fit-content;
  margin: 0 auto 0 auto;
`;

export const StyledSocialIcon = styled(SocialIcon)`
  ${({ hoverColor }) =>
    hoverColor &&
    `
    .social-svg:hover {
      .social-svg-icon {
        fill: ${hoverColor} !important;
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
