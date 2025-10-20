const ResturantCard = ({data}) => {
  const { name, img, cuisine, rating, deliveryTime } = data;
  return (
    <div className="resturant-card">
      <img className="resturant-logo" src={img} alt="resturant-logo" />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default ResturantCard