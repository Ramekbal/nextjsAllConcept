import useSWR from "swr";
//Automatic fetch no required reload.
const fetcher = async ()=>{
    const dataUser= await fetch("https://dummyjson.com/products").then((data)=>data.json());
    return dataUser
  }

export default function ClientSideData() {
 const {data, error}= useSWR('client', fetcher);
 if(error) return "Error occured";
 if(!data) return "Loading"
 return (
    <div>
      {data?.products?.map((data)=>{
        return(
            <h1>{data.thumbnail}</h1>
        )
      })}
    </div>
  )
}
