import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from './AddUser.module.css';
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredUserage,setEnteredUserage] = useState('');
  const [error, setError] = useState();

  const addUserHandler= (event) => {
    event.preventDefault();
    const pureStr = enteredUserage.trim().length * enteredUserage.trim().length;
    if(pureStr === 0){
      setError({
        title:'Invalid input',
        message:'Please enter a valid name and age (non-empty values).'
      })
      return;
    }
    if(+enteredUserage < 1){
      setError({
        title:'Invalid input',
        message:'Please enter a valid age (age > 0).'
      })
      return;
    }
    props.onAddUser(enteredUsername,enteredUserage);
    setEnteredUsername('');
    setEnteredUserage('');
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  }
  
  const userageChangeHandler = (event) => {
    setEnteredUserage(event.target.value);
  }

  const errorHandler = () => {
    setError(null);
  }

  return(
    <div>
      {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="text" value={enteredUserage} onChange={userageChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;