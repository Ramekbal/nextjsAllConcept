import React from 'react';
import {useRouter} from "next/router";

export default function BlogId() {
    const router= useRouter();
  return (
    <div>
      <h1>This is dynamic route <br/> By using square bracket {router?.query?.blogId}</h1>
    </div>
  )
}
