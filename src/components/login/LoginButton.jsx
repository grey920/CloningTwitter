import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Aligner = styled.div`
    margin-top: 1rem;
    text-align: right;
`;

const StyledLink = styled(Link)`
background-color: #1da1f2;
&:hover{
    background-color:#1e5395;
}
`;

export const LoginButton = ({to, children}) =>(
    <Aligner>
    <StyledLink to={to}>{children}</StyledLink>
</Aligner>
);

