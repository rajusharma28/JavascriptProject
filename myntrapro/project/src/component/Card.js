function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.cloth} />
      <div>
        <h2>{props.cloth}</h2>
        <h1>{props.offer}</h1>
        <h2>Shop Now</h2>
      </div>
    </div>
  );
}


export default Card;