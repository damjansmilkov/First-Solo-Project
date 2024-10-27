
import Button from "../UI/Button/Button";
import styled from "styled-components";



const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; 
`;

const Container = styled.div`
   width: 50rem;
  max-width: 90%;
  padding: 2rem;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  z-index: 1000; 
`;

const Header = styled.header`
  width: 100%;
  padding: 1rem;
  background-color: #1f2937;
  color: #ffffff;
  border-radius: 8px 8px 0 0;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
`;

const Message = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4b5563;
  margin: 2rem 0;
  text-align: center;
`;

const Footer = styled.footer`
  padding-top: 0.1rem;
  display: flex;
  justify-content: center;
  width: 100%;
`;


const ErrorMessage=(props)=>{
return(

   
   
      <Backdrop onClick={props.onOk}>
        <Container>
<Header>
<h2>
    {props.title}
</h2>
</Header>
<Message>{props.message}</Message>
<Footer>
    <Button onClick={props.onOk}>OK</Button>
</Footer>
</Container>
    </Backdrop>

);
}



export default ErrorMessage;