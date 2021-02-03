import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../utils/API";

function Detail() {
   const [hero, setHero] = useState({});
   const { id } = useParams();
   console.log(id);
   // const url = window.location.href;
   // console.log(url);
   // const heroPageId = url.slice(29, 53);
   // console.log(heroPageId);

   useEffect(() => {
      API.getHero(id)
        .then(res => setHero(res.data))
        .catch(err => console.log(err));
    },[]);
   console.log(hero);

   return (
      <div>
         <h1>
            Name: {hero.realName}
            <br></br>
            Alias: {hero.alias}
            <br></br>
            Team: {hero.team}
            <br></br>
            <button type="button" className="btn btn-warning">
               <Link to={"/"}>Back</Link>
            </button>

         </h1>
      </div>
   );
};

export default Detail;