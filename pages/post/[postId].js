import React from 'react';

import { useRouter } from 'next/router';

export default function PostDetails({postDatails}) {
    const router = useRouter();
    if(router.isFallback){
        return <h1>Loading...</h1>
    }
  return (
    <div>
      <h1> {postDatails.id}{postDatails.title}</h1>
    </div>
  )
}

export async function getStaticPaths(context) {
    // const postDatas = await fetch(
    //     "https://jsonplaceholder.typicode.com/posts"
    //   ).then((data) => data.json());
    //   const paths = postDatas.map((post)=>{
    //     return {
    //         params:{postId:`${post.id}`}
    //     }
    //   })
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
    // paths,
      fallback:true // if false / true/ block
    };
  }

export async function getStaticProps(context){
    const {params}= context
    const postDatails = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`).then((data)=>data.json());

    return {
        props:{
            postDatails
        }
    }
}
