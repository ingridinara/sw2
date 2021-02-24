import { Height } from '@material-ui/icons';
import React from 'react';
import { StyledFooter } from './footerstyled';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAtom } from '@fortawesome/free-solid-svg-icons'; // fas
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons'; // fab
// style
import {
  FooterSocial,
  StyledFooterTitle,
  FooterIconBar,
  FooterUpperPart,
  FooterAllRights,
  FooterSmallText,
  FooterNavBar,
  FooterNavBarLi,
  FooterLowerPart,
} from './footerstyled';
const Footer = () => {
  return (
    <StyledFooter>
      <FooterUpperPart>
        <StyledFooterTitle>FOLLOW STAR WARS:</StyledFooterTitle>
        <FooterSocial>
          <FontAwesomeIcon
            icon={faFacebook}
            style={{
              color: 'rgb(102,102,102)',
              paddingLeft: '7px',
              width: '10px',
            }}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            style={{
              color: 'rgb(102,102,102)',
              paddingLeft: '7px',
              width: '10px',
            }}
          />
          <FontAwesomeIcon
            icon={faTwitter}
            style={{
              color: 'rgb(102,102,102)',
              paddingLeft: '7px',
              width: '10px',
            }}
          />
          <FontAwesomeIcon
            icon={faYoutubeSquare}
            style={{
              color: 'rgb(102,102,102)',
              paddingLeft: '7px',
              width: '10px',
            }}
          />
          <FooterIconBar>|</FooterIconBar>
          <FontAwesomeIcon
            icon={faAtom}
            style={{
              color: 'rgb(102,102,102)',
              paddingLeft: '7px',
              width: '10px',
            }}
          />
        </FooterSocial>
        <FooterAllRights>
          TM & Lucasfilm Ltd. All Rights Reserved
        </FooterAllRights>
      </FooterUpperPart>
      <FooterLowerPart>
        <FooterNavBar>
          <FooterNavBarLi>Terms of User</FooterNavBarLi>
          <FooterNavBarLi>Additional Content Information</FooterNavBarLi>
          <FooterNavBarLi>Privacy Policy</FooterNavBarLi>
          <FooterNavBarLi>Children's Online Privacy Policy</FooterNavBarLi>
          <FooterNavBarLi>Your California Privacy Rights</FooterNavBarLi>
          <FooterNavBarLi>Star Wars at shopDisney</FooterNavBarLi>
          <FooterNavBarLi>Star Wars Helpdesk</FooterNavBarLi>
          <FooterNavBarLi>Interest-Based Ads</FooterNavBarLi>
        </FooterNavBar>
        <FooterSmallText>Do Not Sell My Info</FooterSmallText>
      </FooterLowerPart>
    </StyledFooter>
  );
};

export default Footer;
