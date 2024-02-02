import React, { useEffect, useState } from "react";
import { getData } from "../api";
import { useParams } from "react-router-dom";
import NaatCard from "../components/NaatCard";

const Search = () => {

    const [result,setResult] = useState([])
    const {query} = useParams()

    useEffect(()=>{
      getData('/search/'+query).then((res)=>{
        setResult(res)
      })
    },[])

  return (
    <div key={query} className="body flex justify-center my-20">
      <div className="w-6/12">
        {result?.map((naat, index) => (
          <NaatCard key={index} naat={naat} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Search;
