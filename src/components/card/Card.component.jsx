import React from "react";
import "./card.styles.scss";
import {useNavigate} from 'react-router-dom';



const Card = ({name, street, id, lat, long}) => {

    let navigate = useNavigate();

   
    const userView = () => {

        navigate({

            pathname: `user-map/${id}/${name}/${street}/${lat}/${long}`,
    
        })    
    }

    return (

        <>
            <div className="cardContainer" onClick={userView}>

                <img src={`https://robohash.org/set_set5/${id}?200x200 `} alt="users" />

                <div>
                    <h2>{name}</h2>
                    <p>Street {street}</p>
                    <p style={{color: 'blue'}}>Click to see my Location</p>
                </div>

            </div>
        </>
    )
}

export default Card;