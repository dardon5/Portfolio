import "./projectItemCard.scss";

const ProjectItemCard = (props) => {
  return (
    <div className="card">
      <div className="item">
        <img src={props.item.img} alt="" />
        <h3>{props.item.title}</h3>
      </div>
    </div>
  );
};

export default ProjectItemCard;
