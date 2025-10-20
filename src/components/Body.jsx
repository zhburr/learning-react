import ResturantCard from "./ResturantCard";
import RESTURANT_LIST from '../utils/mockData'
import { useState } from "react";


const Body = () => {
 const [list,setList] = useState(RESTURANT_LIST);

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filters">
        <button className="filter-btn" onClick={()=>{
            console.log('button clicked');
            const filterdRes = list.filter((res)=>res.rating > 4.2);
            setList(filterdRes)
        }}
        >Top Rated Resturntans</button>
      </div>
      <div className="resturant-container">
        {list.map((res, index) => (
          <ResturantCard key={index} data={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
