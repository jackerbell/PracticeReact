import classes from './Card.module.css'

const Card = props => {

  return (
    //  사용자 지정태그이므로 className을 통해 바로 선언하는 것이 아닌, props를 통해 style 속성을 받을 수 있음.
    <div className={`${classes.card} ${props.className}`}>  
      {props.children}
    </div>
  );
};

export default Card;