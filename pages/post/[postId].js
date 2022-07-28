import React from 'react'

export default function postDetails({postDatails}) {
  return (
    <div>
      <h1>{postDatails.title}</h1>
    </div>
  )
}

export async function getStaticPaths(context) {
    return {
      paths: [
        {
          params: { postId: "1" },
        },
        {
          params: { postId: "2" },
        },
        {
          params: { postId: "3" },
        },
      ],
      fallback:false
    };
  }

export async function getStaticProps(){
    const postDatails = await fetch("https://jsonplaceholder.typicode.com/posts/1").then((data)=>data.json());

    return {
        props:{
            postDatails
        }
    }
}
