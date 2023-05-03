import { Col, Row } from 'antd';
import { SocialIcon } from 'react-social-icons';

import { CardCol, StyledImage, StyledIconCol, LayoutRow, SocialsRow } from './styles';

const MainPage = () => {
  const socialItems = [
    'https://github.com/Blindeen',
    'https://twitter.com/kubaszmajda',
    'https://www.instagram.com/kubaszmajda/',
    'https://www.linkedin.com/in/jakub-szmajda-773742265/',
    'https://www.facebook.com/kubaszmajda/',
    'https://open.spotify.com/user/kszmajda?si=d7adbf43f4ed4319',
  ];

  const socialItemsJSX = socialItems.map((link, index) => (
    <Col key={index} xs={{ span: 24 }} lg={{ span: 4 }}>
      <Row key={index}>
        <StyledIconCol key={index}>
          <SocialIcon key={index} url={link} target='_blank' fgColor='white' bgColor='transparent' />
        </StyledIconCol>
      </Row>
    </Col>
  ));

  return (
    <LayoutRow>
      <CardCol xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
        <Row>
          <StyledImage xs={{ span: 24 }} lg={{ span: 12, offset: 6 }} />
        </Row>
        <SocialsRow>
          <Col xs={{ span: 24 }} lg={{ span: 16, offset: 4 }}>
            <Row>
              <Col span={16} offset={4}>
                <Row>{socialItemsJSX}</Row>
              </Col>
            </Row>
          </Col>
        </SocialsRow>
      </CardCol>
    </LayoutRow>
  );
};

export default MainPage;
