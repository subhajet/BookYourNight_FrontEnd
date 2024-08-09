import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {FinalPrice, HotelDetails, HotelImages, Navbar} from "../../components"
import "./SingleHotel.css"

export const SingleHotel = () => {
  const { id } = useParams();
  const [singleHotel, setSingleHOtel] = useState();

  useEffect(() => {
    (async () => {
      try {
        const {data} = await axios.get(
          `https://bookyournightbacked.onrender.com/api/hotel/${id}`
        );
        setSingleHOtel(data)

      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);


  if (!singleHotel) {
    return <div>Loading...</div>; 
  }
  const name = singleHotel?.name || "Unnamed Hotel";
  const state = singleHotel?.state || "Unknown State";
  return (    
    <Fragment>
    <Navbar />
    <main className="single-hotel-page"> 
    <p className="hotel-name-add"> {name}, {state} </p>
    <HotelImages singleHotel={singleHotel}/>

    <div className="d-flex ">  
    <HotelDetails singleHotel={singleHotel}/>
    <FinalPrice singleHotel={singleHotel}/>
    </div>
    </main>
    </Fragment>
    
  )
};