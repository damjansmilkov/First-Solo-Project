import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import { useState } from "react";
import styled from "styled-components";

const Inputstyle=styled.input`
width: 100%;
`;

const Input =() =>{

    const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler=(event)=>{
    setEnteredName(event.target.value);
  }
  const ageChangeHandler=(event)=>{
    setEnteredAge(event.target.value);
  }
 
    const SubmitHandler =(event)=>{
        event.preventDefault();
        setEnteredAge('');
        setEnteredName('');
        };

    return(
<Card>
    <form onSubmit={SubmitHandler}>
        <div>
<label htmlFor="Name">Name</label>
<Inputstyle id='Name'type='text'
value={enteredName}
onChange={nameChangeHandler}/>
        </div>
        <div>
<label htmlFor="Age">Age</label>
<Inputstyle id='Age' type='number'
value={enteredAge}
onChange={ageChangeHandler}/>
        </div>
<Button type='submit'>Add User</Button>
</form>
</Card>
    );
};

export default Input;