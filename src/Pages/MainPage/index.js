import { useState } from 'react';
import { Col, Row, Switch } from 'antd';

import {
  CardCol,
  LayoutRow,
  SocialsRow,
  StyledIconCol,
  StyledImageCol,
  StyledImg,
  StyledSocialIcon,
  SwitchDiv,
} from './styles';
import palette from '../../palette';
import socialLinks from '../../socialLinks';

const MainPage = () => {
  const [lightTheme, setLightTheme] = useState(localStorage.getItem('lightTheme') === 'true');

  const socialLinksJSX = socialLinks.map(({ link, color }, index) => (
    <Col key={index} xs={{ span: 24 }} lg={{ span: 4 }}>
      <Row key={index}>
        <StyledIconCol key={index}>
          <StyledSocialIcon
            key={index}
            url={link}
            target='_blank'
            fgColor={lightTheme ? palette.black : palette.white}
            bgColor='transparent'
            color={color}
          />
        </StyledIconCol>
      </Row>
    </Col>
  ));

  const switchOnClick = () => {
    const updateTheme = !lightTheme;
    setLightTheme(updateTheme);
    localStorage.setItem('lightTheme', updateTheme.toString());
  };

  return (
    <LayoutRow>
      <StyledImg src='/my-links-page/assets/red-face-avatar.jpg' />
      <SwitchDiv>
        <Switch
          onClick={switchOnClick}
          defaultChecked={localStorage.getItem('lightTheme') === 'true'}
        />
      </SwitchDiv>
      <CardCol
        xs={{ span: 24 }}
        sm={{ span: 16, offset: 4 }}
        md={{ span: 16, offset: 4 }}
        lg={{ span: 12, offset: 6 }}
        xxl={{ span: 10, offset: 7 }}
        light={lightTheme}
      >
        <Row>
          <StyledImageCol
            xs={{ span: 24 }}
            sm={{ span: 16, offset: 4 }}
            md={{ span: 16, offset: 4 }}
            lg={{ span: 12, offset: 6 }}
            light={lightTheme}
          />
        </Row>
        <SocialsRow>
          <Col xs={{ span: 24 }} lg={{ span: 16, offset: 4 }}>
            <Row>
              <Col span={16} offset={4}>
                <Row>{socialLinksJSX}</Row>
              </Col>
            </Row>
          </Col>
        </SocialsRow>
      </CardCol>
    </LayoutRow>
  );
};

export default MainPage;
