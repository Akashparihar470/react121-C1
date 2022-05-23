import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import "./App.css";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(true);
  const [err,setErr] = useState(false);
  const [saleryOrder,setSaleryOrder] = useState("Asc")
  const [page,setPage] = useState(1);

  const getdata = ({page,saleryOrder})=>{
    setLoading(true);
    axios({
      method:'get',
      url:'https://json-server-mocker-masai.herokuapp.com/candidates',
      params:{
        _page:page,
        _limit:5,
        _sort:"rating",
        _order:saleryOrder
      }
    })
    .then(res=>{
      setData(res.data);
      setLoading(false);
    })
    .catch(err=>{
      setLoading(false);
      console.log(err);
      setErr(true)
    })
  }


  useEffect(()=>{
     getdata({page,saleryOrder});
     console.log(data)
  },[page,saleryOrder])

  return (
    <div className="App">
      <div>{loading &&<div id="loading-container">...Loading</div>}
        <Button id="SORT_BUTTON" onClick={()=> setSaleryOrder("Desc")} title={"Sort by descending"} />
        <Button title="PREV" id="PREV" disabled={page === 1} onClick={()=>setPage(page-1)}/>
        <Button id="NEXT" title="NEXT" onClick={()=>setPage(page+1)}/>
      </div>
      {data.map(item => <CandidateCard key={item.id} title={item.title} name={item.name} company={item.company_name} salary={item.salary} img={item.avatar}/>)}
    </div>
  );
}
