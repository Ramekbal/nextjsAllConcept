import React from 'react'

export default function NewsDetails({postDatas}) {
  return (
    <div>
      <h1>{postDatas.title}</h1>
    </div>
  )
}

export async function getServerSideProps(context){
    const {params:{newsDetails}, req, res, query}= context
    res.setHeader('Set-Cookie', ['name=vishawas']);
    const postDatas = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${newsDetails}`
      ).then((data) => data.json());
    
      return {
        props: {
          postDatas: postDatas
        },
      };
}