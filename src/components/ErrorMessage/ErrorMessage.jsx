
import Button from "../UI/Button/Button";
import styled from "styled-components";

const Container= styled.div`

div{
    width: 50rem;
  max-width: 90%;
  margin: 3rem auto;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  height: 15rem;

   
}
header {
    width:auto;
    top: 0;
    left: 0;
    padding: 1rem 2rem;
    background-color: #1f2937;
    color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #4b5563;
    margin: 1rem 0;
  }
  
    
`;

const ErrorMessage =(props) => {

return(
    <Container>
        <div>
<header>
<h2>
    {props.title}
</h2>
</header>
<p>{props.message}</p>
<footer>
    <Button>OK</Button>
</footer>
</div>
    </Container>

);


};

export default ErrorMessage;