import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
    text-decoration: none;
    color: #007bff;
    z-index: 5;
`;

export const HeaderContainer = styled.div`
    
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    padding: 0 60px;
    height: 70px;
    width:100%;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;


export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index:5
`;

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`;



