import React from 'react';
//
import { Link } from 'react-router-dom';
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
  HeaderBackground,
  HeaderLogo,
  HeaderUpperPart,
  HeaderSocial,
  HeaderSearch,
  HeaderSignInButton,
  HeaderSignUpButton,
  HeaderButtonsDiv,
  HeaderBetweenButtons,
  HeaderInput,
  HeaderUpperRight,
  HeaderIconBar,
  HeaderNavBar,
  HeaderNavBarUl,
  HeaderNavBarLi,
} from './headerstyled';
// imgs
const space =
  'https://github.com/ingridinara/pics/blob/main/stars.jpg?raw=true';
const whiteLogo =
  'https://github.com/ingridinara/pics/blob/main/sw.jpg?raw=true';

const Header = () => {
  return (
    <HeaderBackground>
      <HeaderUpperPart>
        <HeaderSocial>
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
          <HeaderIconBar>|</HeaderIconBar>
          <FontAwesomeIcon
            icon={faAtom}
            style={{
              color: 'rgb(102,102,102)',
              paddingLeft: '7px',
              width: '10px',
            }}
          />
        </HeaderSocial>
        <Link to="/">
          <HeaderLogo src={whiteLogo} alt="starWarsLogo"></HeaderLogo>
        </Link>
        <HeaderUpperRight>
          <HeaderSearch>
            <HeaderInput placeholder="Search Star Wars"></HeaderInput>
            <FontAwesomeIcon
              icon={faSearch}
              style={{
                color: 'rgb(42,42,42)',
                position: 'relative',
                backgroundColor: ' rgb(52, 52, 52)',
                borderRadius: '3px',
                marginTop: '5px',
                marginBottom: '5px',
                marginLeft: '82px',
                height: '10px',
              }}
            />
          </HeaderSearch>
          <HeaderButtonsDiv>
            <Link to="/">
              <HeaderSignInButton>SIGN IN</HeaderSignInButton>
            </Link>

            <HeaderBetweenButtons>//</HeaderBetweenButtons>
            <Link to="/signup">
              <HeaderSignUpButton>SIGN UP</HeaderSignUpButton>
            </Link>
          </HeaderButtonsDiv>
        </HeaderUpperRight>
      </HeaderUpperPart>
      <HeaderNavBar>
        <HeaderNavBarUl>
          <Link to="/signup">
            <HeaderNavBarLi>NEWS + BLOG</HeaderNavBarLi>
          </Link>
          <Link to="/signup">
            <HeaderNavBarLi>VIDEO</HeaderNavBarLi>
          </Link>
          <Link to="/signup">
            <HeaderNavBarLi>FILMS</HeaderNavBarLi>
          </Link>
          <Link to="/signup">
            <HeaderNavBarLi>SERIES</HeaderNavBarLi>
          </Link>
          <Link to="/signup">
            <HeaderNavBarLi>INTERACTIVE</HeaderNavBarLi>
          </Link>
          <Link to="/signup">
            <HeaderNavBarLi>COMMUNITY</HeaderNavBarLi>
          </Link>
          <Link to="/characterlist">
            <HeaderNavBarLi style={{ borderRight: '1px solid rgb(42,42,42)' }}>
              LIST OF CHARACTERS
            </HeaderNavBarLi>
          </Link>
        </HeaderNavBarUl>
      </HeaderNavBar>
    </HeaderBackground>
  );
};

export default Header;
