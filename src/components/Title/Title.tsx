import "./Title.scss"
const Title = (props: any) => {
  return (
    <div className="title-container">
      <h3>{props.title}</h3>
    </div>
  );
};

export default Title;