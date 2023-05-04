import { Col, Row } from 'antd';

import { CardCol, LayoutRow, SocialsRow, StyledIconCol, StyledImage, StyledSocialIcon } from './styles';
import palette from '../../palette';

const MainPage = () => {
  const socialLinks = [
    {
      link: 'https://github.com/Blindeen',
      hoverColor: palette.github,
    },
    {
      link: 'https://twitter.com/kubaszmajda',
      hoverColor: palette.twitterBlue,
    },
    {
      link: 'https://www.instagram.com/kubaszmajda/',
      hoverColor: palette.instagramPink,
    },
    {
      link: 'https://www.linkedin.com/in/jakub-szmajda-773742265/',
      hoverColor: palette.linkedinPurple,
    },
    {
      link: 'https://www.facebook.com/kubaszmajda/',
      hoverColor: palette.facebookBlue,
    },
    {
      link: 'https://open.spotify.com/user/kszmajda?si=d7adbf43f4ed4319',
      hoverColor: palette.spotifyGreen,
    },
  ];

  const socialLinksJSX = socialLinks.map(({ link, hoverColor }, index) => (
    <Col key={index} xs={{ span: 24 }} lg={{ span: 4 }}>
      <Row key={index}>
        <StyledIconCol key={index}>
          <StyledSocialIcon
            key={index}
            url={link}
            target='_blank'
            fgColor={palette.white}
            bgColor='transparent'
            hoverColor={hoverColor}
          />
        </StyledIconCol>
      </Row>
    </Col>
  ));

  return (
    <LayoutRow>
      <CardCol xs={{ span: 24 }} md={{ span: 16, offset: 4 }} lg={{ span: 12, offset: 6 }}>
        <Row>
          <StyledImage xs={{ span: 24 }} md={{ span: 16, offset: 4 }} lg={{ span: 12, offset: 6 }} />
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
