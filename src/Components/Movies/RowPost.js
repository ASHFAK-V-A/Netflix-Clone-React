
import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import { API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios.'



function RowPost(props) {


const [movies,setMovies]=useState([])

console.log(imageUrl);




  useEffect(()=>{
axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(responseon=>{
setMovies(responseon.data.results)

}).catch((err)=>{
  console.log(err);
})

  },[])
  return (
    <div className='row'>
        <section>
           <div className="movietext">
            <h2 className={props.isSmall ?'displayNone':''}>Only on Netflix</h2>   
            <p className={props.isSmall ?'displayNone':''}>Netflix is the home of amazing original programming that you can’t find anywhere else. Movies, TV shows, specials and more, all tailored specifically to you.</p>
            
            <h3 className={props.isSmall ?'displayNone':''}>
Popular on Netflix</h3>
<h2 className='category'>{props.title}</h2>
           </div>
       
 
        </section>

      <div className='cards'>
{movies.map((item)=>
  <img className={props.isSmall ?'smallPoster ':'posters'} src={`${imageUrl+item.backdrop_path}`} alt="" />
)}
      </div>
    </div>
  )
}

export default RowPost
