import classes from './Card.module.css';

const Card = (props: any) => {
  return (
    <div className={`${classes.card} ${props.className}`}>
      <h2 className={classes.title}>{props.header}</h2>
      <div className={`${classes["card-content"]} ${props.className}`}>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
