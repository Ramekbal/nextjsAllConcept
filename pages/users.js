import React, { Fragment } from 'react'

export default function users({datas}) {
  return (
    <div>
        {datas.map((data, index)=>{
            return(
                <Fragment key={data.id}>{data.name}<br/></Fragment> 
            )
        })}
      <>Hi this is tag</>
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
