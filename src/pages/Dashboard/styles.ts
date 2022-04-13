import styled, { css } from 'styled-components';
import { shade } from 'polished';
import Lottie from 'react-lottie';

interface FormProps {
  hasError: boolean;
}

export const Form = styled.form<FormProps>`
  display: flex;
  max-width: 900px;
  width: 80%;
  align-items: center;
  margin-top: 20px;

  input {
    width: 100%;
    height: 60px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 1px solid #a9a9a9;
    border-right: none;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    max-width: 150px;
    height: 60px;
    padding: 10px;
    background: #ff3366;
    border-radius: 0 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#FF3366')};
    }
  }

  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const UsersList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  margin-top: 30px;
  margin-bottom: 200px;
  max-width: 900px;
  width: 80%;

  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const LottieAnimation = styled(Lottie)`
  min-width: 200px;
`;
