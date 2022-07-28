import React, { Fragment } from 'react';
import User from './../component/user';

export default function users({datas}) {
  return (
    <div>
        {datas.map((data, index)=>{
            return(
                <div key={data.id}>
                <User userdata={data}></User>
                </div> 
            )
        })}
    </div>
  )
}
export async function getStaticProps() {
    const fetchData = await fetch('https://jsonplaceholder.typicode.com/users').then((res)=> res.json());
    console.log("fetchData", fetchData);
    return {
        props:{
            datas:fetchData
        }
    }
}
