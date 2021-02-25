import styled from 'styled-components';
import Colors from './Colors';

export const PageStyled = styled.div`
  height: 80%vh;
  background-image: url('https://github.com/ingridinara/pics/blob/main/stars.jpg?raw=true');
  border-top: 1px solid rgb(42, 42, 42);
  position: relative;
  z-index: -1;
  padding: 1rem;
  color: rgb(42, 42, 42);
`;

export const PageTitle = styled.div`
  font-size: 12px;
  color: white;
  text-align: center;
`;

export const CharactersNames = styled.div`
  font-size: 10px;
  color: rgb(147, 126, 78);
  padding-bottom: 1rem;
  background-color: rgb(42, 42, 42);
  margin-top: 2rem;
  margin-bottom: 0.1rem;
  margin-right: 3rem;
  margin-left: 3rem;
  padding-right: 1rem;
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgb(49, 106, 179);
  text-align: center;
  width: 70%;
`;
