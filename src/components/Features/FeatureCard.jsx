const FeatureCard = (prop) => {
  return (
    <div className="card-f">
      <div className="card-fimage">
        <img src={prop.img} />
      </div>
      <div className="feature-info">
        <p>{prop.title}</p>
        <p>{prop.desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
