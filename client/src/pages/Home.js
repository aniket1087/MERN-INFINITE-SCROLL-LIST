import React, { useEffect,useState} from 'react'
import Card from './Card';
import Nav from './Nav'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import { isExpired, decodeToken } from "react-jwt";
import Sekelton from './Sekelton';


const Home = () => {
  const arr=["male","female","female","male","male","female"]
    useEffect(()=>{
        const token=localStorage.getItem('token')
        if(token){
          const user= decodeToken(token);
          console.log(user)
          const expire= isExpired(token);
          console.log(expire)
            if(!user || expire===true){
                localStorage.removeItem('token')
                window.location.href='/login'
            }
        }
        else{
          localStorage.removeItem('token')
            window.location.href='/login'
        }
    })
    const [loading,setLoading]=useState(false)
    const [index,setIndex]=useState(0);
    const [state,setState]=useState([])
    const[users,setUsers]=useState([]);
    useEffect(()=>{
      setLoading(true);
        const fetchApi=async()=>{
            const url=`https://randomuser.me/api/?results=500`;
           await fetch(url)
            .then((res) => res.json())
            .then((data) =>{ setUsers([...data.results])
             setState([...data.results.slice(0,20)]);
             setLoading(false);
          })
          }
          fetchApi();
        },[])
    const fetchMoreData=() => {
        setTimeout(() => {
          const arr=users.slice(index,index+20);
          setIndex(index+20);
            setState([...state,...arr]);
        }, 1000);
    };

  return (
    <div>
    <Nav/>
    <div className="d-flex flex-wrap justify-content-center mar">
    {loading ? <Spinner/> :" "}
    {loading ?<> {arr.map((element)=><Sekelton name={element}/>)}</>:" "}
    <InfiniteScroll
          dataLength={state.length}
          next={fetchMoreData}
          hasMore={state.length!==users.length}
          loader={<Spinner/>} >
          {state.map((element,index) => (
            <div className='d-inline-flex' key={index}>
               <Card image={element.picture.large} name={element.name.first +" "+ element.name.last} gender={element.gender} age={element.dob.age} phone={element.phone} reg={element.registered.date} email={element.email}/>
            </div>
          ))}
    </InfiniteScroll>
    </div>
    </div>
  )
}

export default Home