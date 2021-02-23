import styled from 'styled-components';
import Colors from './Colors';
//

export const HeaderBackground = styled.div`
  background-image: url('https://github.com/ingridinara/pics/blob/main/stars.jpg?raw=true');

  background-repeat: repeat;
  position: relative;
  top: 0;
  height: 5rem;
  z-index: 1;
  position: sticky;
`;

export const HeaderUpperPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
`;

export const HeaderSocial = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  z-index: 1;
`;

export const HeaderIconBar = styled.div`
  color: rgb(102, 102, 102);
  padding-left: 7px;
  font-size: 12px;
`;
export const HeaderLogo = styled.img`
  height: 3rem;

  position: relative;
  object-fit: contain;
`;

export const HeaderUpperRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const HeaderSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const HeaderButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderInput = styled.input`
  width: 15%;
  border: 1px solid black;
  background-color: rgb(52, 52, 52);
  color: rgb(42, 42, 42);
  border-radius: 3px;
  position: absolute;
  margin-right: 10px;
  padding-left: 10px;
  font-size: 7px;
  height: 1.1rem;
`;
export const HeaderSignInButton = styled.button`
  border: none;
  background-color: black;
  color: rgb(42, 42, 42);
  font-size: 7px;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

export const HeaderSignUpButton = styled.button`
  border: none;
  background-color: black;
  color: rgb(42, 42, 42);
  font-size: 7px;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

export const HeaderBetweenButtons = styled.div`
  padding: 0.1rem;
  color: rgb(42, 42, 42);
`;

export const HeaderNavBar = styled.div`
  background-color: black;
  height: 1rem;
`;

export const HeaderNavBarUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  font-size: 7px;
  border-top: 1px solid rgb(42, 42, 42);
  padding-right: 1.5rem;
`;

export const HeaderNavBarLi = styled.li`
  list-style: none;
  border-left: 1px solid rgb(42, 42, 42);
  padding-top: 0.3rem;
  padding-bottom: 0.2rem;
  padding-left: 0.5rem;
  padding-right: 0.7rem;
  color: rgb(96, 96, 96);
  font-weight: bold;

  &:hover {
    color: white;
  }
`;
