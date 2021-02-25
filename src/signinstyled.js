import styled from 'styled-components';
import Colors from './Colors';

export const PageStyled = styled.div`
  height: 80%vh;
  background-image: url('https://github.com/ingridinara/pics/blob/main/stars.jpg?raw=true');
  border-top: 1px solid rgb(42, 42, 42);
  position: relative;
  z-index: 1;
  padding: 1rem;
  color: rgb(42, 42, 42);
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  background: rgb(42, 42, 42) 0% 0% no-repeat padding-box;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  box-shadow: 0px 3px 6px #00000029;
  overflow: hidden;
  max-width: 22rem;
  height: 22.7rem;
  margin: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2.19rem;

  & > .classInput {
    margin-bottom: 1.69rem;
    position: relative;

    & > label {
      display: inline-block;
      margin-bottom: 5px;
    }
  }
`;

export const ChangePassword = styled.div`
  display: inline-block;
  padding: 0 0 0.5rem 0;
`;

export const InputLabel = styled.label`
  display: inline-block;
  color: white;
`;

export const Label = styled.label`
  display: inline-block;
  & > a {
    color: white;
    text-decoration: none;
    &:hover {
      color: blue;
    }
  }
`;

export const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

export const StyleRedirect = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0 0 0;
  color: rgb(147, 126, 78);

  & > a {
    text-decoration: none;
    color: white;
    margin: 0 0 0 0.2rem;
  }

  & > a:hover {
    color: red;
  }
`;

export const StyledInput = styled.input`
  width: 18.6rem;
  height: 2.6rem;
  border-radius: 5px;
  border: 1px solid #dddddd;
  display: block;
  font: normal normal normal 16px/32px Helvetica Neue;
  font-size: 14px;
  color: #393939;
  padding: 0.75rem;
  &.error {
    border: 1px solid red;
    color: #7d868b;
  }
`;
export const StyledButton = styled.button`
  box-shadow: 0px 2px 4px #00000029;
  border: none;
  border-radius: 6px;
  opacity: 1;
  cursor: pointer;
  text-align: left;
  font: normal normal normal 15px/22px Helvetica Neue;
  letter-spacing: 0px;
  width: 18.6rem;
  height: 2.6rem;
  margin: 0.5rem 0 0 0;
  text-align: center;
  font-weight: bold;
  background-color: rgb(147, 126, 78);
  color: blue;
`;

export const SpanError = styled.span`
  color: red;
  font-size: 15px;
  padding-top: 3px;
  padding-left: 3px;
`;
