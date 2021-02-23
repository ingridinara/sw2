import styled from 'styled-components';
import Colors from './Colors';

export const StyledFooter = styled.div`
  height: 20vw;
  background-color: black;
  position: relative;
  margin-bottom: 2rem;
  z-index: -1;
  padding: 1rem;
`;

export const StyledFooterTitle = styled.h4`
  color: rgb(102, 102, 102);
  position: relative;
  background-color: black;
  z-index: 1;
  font-size: 5px;
`;

export const FooterUpperPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  font-size: 7px;
`;

export const FooterSocial = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const FooterIconBar = styled.div`
  color: rgb(102, 102, 102);
  padding-left: 7px;
  font-size: 12px;
`;

export const FooterAllRights = styled.div`
  color: rgb(102, 102, 102);
  margin-top: 10px;
  position: relative;
  background-color: black;
  z-index: 1;
  font-size: 5px;
`;

export const FooterLowerPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FooterNavBar = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  font-size: 7px;
  padding-right: 1.5rem;
`;

export const FooterNavBarLi = styled.li`
  list-style: none;
  border-right: 1px solid rgb(42, 42, 42);
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  color: rgb(96, 96, 96);
`;
export const FooterSmallText = styled.div`
  color: rgb(102, 102, 102);
  margin-top: 10px;
  position: relative;
  background-color: black;
  z-index: 1;
  font-size: 5px;
  padding-top: 0.1rem;
`;
