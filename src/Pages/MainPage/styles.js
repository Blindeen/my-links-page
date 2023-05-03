import styled from 'styled-components';
import { Col, Row } from 'antd';

export const LayoutRow = styled(Row)`
  margin-top: 50px;

  @media (max-width: 480px) {
    margin-top: 0;
  }
`;

export const SocialsRow = styled(Row)`
  margin-top: 20px;
`;

export const StyledImage = styled(Col)`
  background-image: linear-gradient(to bottom, transparent 80%, black), url('/assets/winter_photo_web.jpg');
  height: 458px;
  background-size: cover;
  margin-bottom: 25px;
  border-radius: 12px;

  @media (max-width: 480px) {
    border-radius: 0;
  }
`;

export const CardCol = styled(Col)`
  background-color: black;
  border-radius: 12px;
  padding: 40px 0 25px 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 480px) {
    border-radius: 0;
    padding: 0;
  }
`;

export const StyledIconCol = styled(Col)`
  width: fit-content;
  margin: 0 auto 0 auto;
`;
