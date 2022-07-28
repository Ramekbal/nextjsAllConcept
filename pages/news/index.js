import React, { Fragment } from 'react';
import Link from "next/link";

export default function News({postDatas}) {
    // console.log("postDatas", postDatas)
  return (
    <div>
        {postDatas.map((data)=>{
            return(
                <Fragment key={data.id}>
                <Link href={`news/${data.id}`} passHref>
                <h1>{data.title}</h1>
                </Link>
                </Fragment>
            )
        })}
      {/* <h1>This is news page</h1> */}
    </div>
  )
}

export async function getServerSideProps(context){
    const postDatas = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      ).then((data) => data.json());
    
      return {
        props: {
          postDatas: postDatas.splice(0, 3)
        },
      };
}