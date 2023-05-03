import styled from "styled-components"
import {Col, Row} from "antd";

export const LayoutRow = styled(Row)`
  margin-top: 70px;

  @media (max-width: 480px) {
    margin-top: 0;
  }
  
`

export const StyledImage = styled(Col)`
  background-image:
          linear-gradient(to bottom, transparent 80%, black),
          url('/assets/winter_photo_web.jpg');
  height: 458px;
  background-size: cover;
  margin-bottom: 25px;
  border-radius: 12px;

  @media (max-width: 480px) {
    border-radius: 0;
  }
`

export const CardCol = styled(Col)`
  background-color: black;
  border-radius: 12px;
  padding: 40px 0 25px 0;
  
  @media (max-width: 480px) {
    border-radius: 0;
    padding: 0;
  }
`

export const StyledIconCol = styled(Col)`
  width: fit-content;
  margin: 0 auto 0 auto;
`
