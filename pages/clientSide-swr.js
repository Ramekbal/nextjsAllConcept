import useSWR from "swr";
//Automatic fetch no required reload.
const fetcher = async ()=>{
    const dataUser= await fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then((data)=>data.json());
    return dataUser
  }

export default function ClientSideData() {
 const {data, error}= useSWR('client', fetcher);
 if(error) return "Error occured";
 if(!data) return "Loading"
 return (
    <div>
      {data?.map((data)=>{
        return(
            <h1>{data.name}</h1>
        )
      })}
    </div>
  )
}
