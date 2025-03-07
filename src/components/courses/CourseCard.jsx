const CourseCard = (prop) => {
  return (
    <div className="course">
      <div className="image">
        <img src={prop.image} />
      </div>
      <div className="info">
        <div className="header-info">
          <p>{prop.title}</p>
          {prop.price > 0 && <div className="pro">Pro</div>}
        </div>
        <p className="desc">{prop.description}</p>
      </div>
    </div>
  );
};

export default CourseCard;
