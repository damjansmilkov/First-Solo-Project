import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import { useState } from "react";
import styled from "styled-components";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

const Inputstyle=styled.input`
width: 100%;
`;

const Input =(props) =>{

    const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError]=useState();

  const nameChangeHandler=(event)=>{
    setEnteredName(event.target.value);
  }
  const ageChangeHandler=(event)=>{
    setEnteredAge(event.target.value);
  }
 
    const SubmitHandler =(event)=>{ 
        event.preventDefault();
        
        
        if(enteredAge.trim().length===0 || enteredAge.trim()===0)
        {
          setError({
            title: 'Invalid input',
            message: ' Please enter a valid name and age (non-empty values).'
          })
          return;
        }
        if (enteredAge<1){
          setError({
            title: 'Invalid age',
            message: ' Please enter a valid age.'
          })
          return;
        }
       
      
        props.onAddUser(enteredName, enteredAge);
        setEnteredAge('');
        setEnteredName('');
        };

        const errorHandler=()=>
        {
          setError(null);

        }

    return(
     <div> 
      {error &&<ErrorMessage title={error.title} message={error.message} onOk={errorHandler} />}
<Card>
    <form onSubmit={SubmitHandler}>
        <div>
        
<label htmlFor="Name"><b>Name</b></label>
<Inputstyle id='Name'type='text'
value={enteredName}
onChange={nameChangeHandler}/>
        </div>
        <div>
<label htmlFor="Age"><b>Age</b></label>
<Inputstyle id='Age' type='number'
value={enteredAge}
onChange={ageChangeHandler}/>
        </div>
<Button type='submit'>Add User</Button>
</form>
</Card>
</div>
    );
};

export default Input;