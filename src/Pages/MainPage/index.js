import { Col, Row } from 'antd';

import { CardCol, LayoutRow, SocialsRow, StyledIconCol, StyledImageCol, StyledImg, StyledSocialIcon } from './styles';
import palette from '../../palette';

const MainPage = () => {
  const socialLinks = [
    {
      link: 'https://github.com/Blindeen',
      color: palette.github,
    },
    {
      link: 'https://twitter.com/kubaszmajda',
      color: palette.twitterBlue,
    },
    {
      link: 'https://www.instagram.com/kubaszmajda/',
      color: palette.instagramPink,
    },
    {
      link: 'https://www.linkedin.com/in/jakub-szmajda-773742265/',
      color: palette.linkedinBlue,
    },
    {
      link: 'https://www.facebook.com/kubaszmajda/',
      color: palette.facebookBlue,
    },
    {
      link: 'https://open.spotify.com/user/kszmajda?si=d7adbf43f4ed4319',
      color: palette.spotifyGreen,
    },
  ];

  const socialLinksJSX = socialLinks.map(({ link, color }, index) => (
    <Col key={index} xs={{ span: 24 }} lg={{ span: 4 }}>
      <Row key={index}>
        <StyledIconCol key={index}>
          <StyledSocialIcon
            key={index}
            url={link}
            target='_blank'
            fgColor={palette.white}
            bgColor='transparent'
            color={color}
          />
        </StyledIconCol>
      </Row>
    </Col>
  ));

  return (
    <LayoutRow>
      <StyledImg src='/my-links-page/assets/red-face-avatar.jpg' />
      <CardCol
        xs={{ span: 24 }}
        sm={{ span: 16, offset: 4 }}
        md={{ span: 16, offset: 4 }}
        lg={{ span: 12, offset: 6 }}
        xxl={{ span: 10, offset: 7 }}
      >
        <Row>
          <StyledImageCol
            xs={{ span: 24 }}
            sm={{ span: 16, offset: 4 }}
            md={{ span: 16, offset: 4 }}
            lg={{ span: 12, offset: 6 }}
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
