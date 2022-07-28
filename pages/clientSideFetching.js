import React from 'react';
import { useEffect, useState } from 'react';

export default function ClientSideFetching() {
    const [loading, setLoading]=useState(true);
    const [userData, setUserData]= useState(null);

    useEffect(()=>{
        async function fecthUserData(){
            const dataUser= await fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then((data)=>data.json());
            setLoading(false);
            setUserData(dataUser);
        }
        fecthUserData();

    },[])
    if(loading){
        return <h1>Loading...</h1>
    }
  return (
    <div>
      {userData?.map((data)=>{
        return(
            <h1>{data.name}</h1>
        )
      })}
    </div>
  )
}
