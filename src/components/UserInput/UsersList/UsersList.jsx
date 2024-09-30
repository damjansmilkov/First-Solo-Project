import styled from "styled-components";
import Card from "../../UI/Card/Card";


const StyledUserList =styled.ul`
  list-style-type: none;    // Removes the default bullets
  padding: 0;
  margin: 0;
  background-color: #f4f4f4;
  border-radius: 8px;
  width: 300px;
  font-family: Arial, sans-serif;
`;

const StyledListItem = styled.li`
  padding: 10px 15px;
  margin: 5px 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const UsersList = props =>{

    return(
        <Card>
    <StyledUserList>
{props.users.map (( user) => (<StyledListItem>{user.name} ({user.age} years old)</StyledListItem>))}

    </StyledUserList>
    </Card>
    );
}

export default UsersList;