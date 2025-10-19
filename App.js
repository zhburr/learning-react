import ReactDOM from "react-dom/client";
/**
 * Header
 * -Logo
 * -navItems
 *
 * Body
 * -Search
 * -Resturant Container
 * -Resturant Card
 *   - Img
 *   - Name
 *   - Star rating
 *   - Cusine
 *   - Delivery time
 *
 */

const restaurants = [
  {
    img: "https://images.deliveryhero.io/image/fd-pk/LH/dca7-listing.jpg",
    name: "Nali Pur Biryani",
    cuisine: "Biryani, Karachi",
    rating: "4.4",
    deliveryTime: "38 mins",
  },
  {
    img: "https://images.deliveryhero.io/image/fd-pk/LH/x8y2-listing.jpg",
    name: "Pizza Planet",
    cuisine: "Italian, Fast Food",
    rating: "4.6",
    deliveryTime: "30 mins",
  },
  {
    img: "https://images.deliveryhero.io/image/fd-pk/LH/a2b3-listing.jpg",
    name: "Lahori Chargha House",
    cuisine: "Desi, BBQ",
    rating: "4.2",
    deliveryTime: "42 mins",
  },
  {
    img: "https://images.deliveryhero.io/image/fd-pk/LH/qw34-listing.jpg",
    name: "China Wok",
    cuisine: "Chinese, Asian",
    rating: "4.3",
    deliveryTime: "35 mins",
  },
  {
    img: "https://images.deliveryhero.io/image/fd-pk/LH/rt56-listing.jpg",
    name: "Burger Hub",
    cuisine: "Fast Food, American",
    rating: "4.1",
    deliveryTime: "28 mins",
  },
  {
    img: "https://images.deliveryhero.io/image/fd-pk/LH/yh89-listing.jpg",
    name: "Karachi Haleem Center",
    cuisine: "Haleem, Pakistani",
    rating: "4.5",
    deliveryTime: "40 mins",
  },
  {
    img: "https://images.deliveryhero.io/image/fd-pk/LH/gh23-listing.jpg",
    name: "Sushi Spot",
    cuisine: "Japanese, Seafood",
    rating: "4.7",
    deliveryTime: "45 mins",
  },
  {
    img: "https://images.deliveryhero.io/image/fd-pk/LH/jk67-listing.jpg",
    name: "Tandoor Nights",
    cuisine: "BBQ, Pakistani",
    rating: "4.0",
    deliveryTime: "33 mins",
  },
  {
    img: "https://images.deliveryhero.io/image/fd-pk/LH/as90-listing.jpg",
    name: "Al Baik Express",
    cuisine: "Arabic, Fried Chicken",
    rating: "4.6",
    deliveryTime: "25 mins",
  },
  {
    img: "https://images.deliveryhero.io/image/fd-pk/LH/ui12-listing.jpg",
    name: "Café Mocha",
    cuisine: "Coffee, Desserts",
    rating: "4.8",
    deliveryTime: "20 mins",
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.designevo.com/res/templates/thumb_small/pizza-menu-logo.webp"
        />
      </div>
      <div className="navitems">
        <ul>
          <li>Home</li>
          <li>Amout Us</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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



const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resturant-container">
        {restaurants.map((res, index) => (
          <ResturantCard
            key={index}
            data={res}
          />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
// root.render([<Header key={1} />, <Body key={2} />])
