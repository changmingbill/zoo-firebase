import styled, {css} from 'styled-components';

const buttonStyles = css`
    
`;
const invertedButtonStyles = css`
      background-color: white;
      color: black;
      border: 1px solid black;
      
      &:hover{
        background-color: black;
        color: white;
        border: none;
        opacity: 0.6;
      }
`;

const googleSignInStyles = css`
    background-color: #4285f4;

    &:hover{
    background-color: #FFD832;
    color: #4285f4;
    border: 1px solid black;
    }
`;

const khakiStyles = css`
    background-color: #AA8739;

    &:hover{
    background-color: #255C69;
    color: #FFE5AA;
    border: 1px solid white;
    }
`;



const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles;
    }
    if (props.khaki) {
        return khakiStyles;
    }


    return props.inverted ? invertedButtonStyles : buttonStyles;
}
export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    margin: 5px 5px;
    cursor: pointer;
    display:flex;
    justify-content: center;

    background-color: black;
    color: white;
    border: none;

    &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    
    }

    ${getButtonStyles}
`;