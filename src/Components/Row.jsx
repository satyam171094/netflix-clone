// import React, { useEffect, useState } from 'react'
// import "../Components/Home/Home.scss"
// import logo from "../poster.jpg"
// import axios from "axios";

// const apiKey = "b156928870ac5b1e9250c0cc88c45fca"
// const url = "https://api.themoviedb.org/3"
// const upcoming = "upcoming"

// const Row = ({arr = [{
//     pic:logo
// }
// ] , title}) => {

//     const [upcomingMovies, setUpcomingMovies] = useState([])

// useEffect(()=>{
//     const fetchUpcoming = async()=>{

//         const {data:{results}} = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)

//         setUpcomingMovies(results)
//         console.log()

//     };

//     fetchUpcoming()

// },[])

//   return (

//     <div className="row">
//       <h2>{title}</h2>
       
//         <div className="poster">
          
//           {  arr.map((item,index)=>(

//             <img src={item.pic} alt="" key={index}/>

//           ))
//         }
//         </div>
//     </div>

//   )
// }

// export default Row
