import { useState,Fragment,useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from './AddUser.module.css';
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler= (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const pureStr = enteredName.trim().length * enteredAge.trim().length;
    if(pureStr === 0){
      setError({
        title:'Invalid input',
        message:'Please enter a valid name and age (non-empty values).'
      })
      return;
    }
    if(+enteredAge < 1){
      setError({
        title:'Invalid input',
        message:'Please enter a valid age (age > 0).'
      })
      return;
    }
    props.onAddUser(enteredName,enteredAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  }

  const errorHandler = () => {
    setError(null);
  }

  return(
    <Fragment>
      {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text"  ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="text"  ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
}

export default AddUser;