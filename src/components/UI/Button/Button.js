import styled from "styled-components";

const Buttonstyle = styled.button`
  font: inherit;
  margin-top: 5px;
  width: 100%;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);

  cursor: pointer;

  @media (min-width: 750px) {
    width: auto;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;
const Button = (props) => {
  return (<Buttonstyle type={props.type || 'button'} onClick={props.onClick}>{props.children}</Buttonstyle>)
};

export default Button;
