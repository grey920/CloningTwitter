import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
border : 1px solid #1da1f2;
border-radius : 10px;
font-size : 1rem;
font-weight : bold;
padding: 0.25rem 1rem;
color : white;
cursor : pointer;

background: #1da1f2;
  &:hover {
    background:#1c7ed6;
  }
`;

const Button = props => <StyledButton {...props} />; // Button이 받아오는 props를 모두 StyledButton에 전달한다는 뜻.

export default Button;