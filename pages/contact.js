import React from 'react';
import { useRouter } from 'next/router';

export default function Contact() {
    const router = useRouter();
    const handleOnClickRedirect =()=>{
        // router.push("/")
        router.replace("/")
    }
  return (
    <div>
      <h1>This is a contact us page</h1>
      <button onClick={handleOnClickRedirect}>Go to home page</button>
    </div>
  )
}
