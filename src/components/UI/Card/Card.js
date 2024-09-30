import styled from "styled-components";

const Cardstyle = styled.div`
  width: 50rem;
  max-width: 90%;
  margin: 3rem auto;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  height: 15rem;
`;

const Card = (props) => {
  return <Cardstyle>{props.children}</Cardstyle>;
};

export default Card;
