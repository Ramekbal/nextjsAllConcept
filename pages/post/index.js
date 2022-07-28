import React from "react";
import Link from "next/link";

export default function Post({ postDatas }) {
  return (
    <div>
      {postDatas.map((postData) => {
        return (
          <div key={postData.id}>
            <Link href={`post/${postData.id}`} passHref>
              <a>{postData.title}</a>
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const postDatas = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((data) => data.json());

  return {
    props: {
      postDatas: postDatas.slice(0, 4),
    },
  };
}
