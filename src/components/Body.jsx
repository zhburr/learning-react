import ResturantCard from "./ResturantCard";
import RESTURANT_LIST from '../utils/mockData'
import { useState } from "react";


const Body = () => {
 const [list,setList] = useState(RESTURANT_LIST);
 const [isFilterApplied, setIsFilterApplied] = useState(false);
 const [searchTerm, setSerachTerm] = useState('');

 const filterTopRated = ()=>{
  const filterd = list.filter((res)=>res.rating >= 4.2)
  setList(filterd);
  setIsFilterApplied(true)
 }

 const filterSearchTerm = () =>{
    const filterd = list.filter((res)=> res.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setList(filterd);
    setIsFilterApplied(true)
 }

 const removeFilter = ()=>{
  setList(RESTURANT_LIST);
  setIsFilterApplied(false)
 }

  return (
    <div className="body">
      <div className="filters">
        <div className="search-container">
          <input type="search" value={searchTerm} onChange={(e)=>setSerachTerm(e.target.value)} />
          <button onClick={filterSearchTerm}>search</button>
        </div>
        <button className="filter-btn" onClick={filterTopRated}
        >Top Rated Resturntans</button>
        {isFilterApplied && <button onClick={removeFilter}>clear</button>}
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
