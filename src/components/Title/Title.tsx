import "./Title.scss"
const Title = (props: any) => {
  return (
    <div className="title-container">
      <h3 className="text-lg">{props.title}</h3>
    </div>
  );
};

export default Title;