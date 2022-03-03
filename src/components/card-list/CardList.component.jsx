import React from "react";
import "./card-list.styles.scss";
//components
import Card from "../card/Card.component";
import Map from "../map/Map"



const CardList = ({people}) => {

    

    return (

        <>
            <h1 style={{color: "whiteSmoke", marginTop: "2rem"}}>Funny Map</h1>
            <div className="card-list">   
            {
                people.map((person, i) => {

                        return (
                            
                            <Card key={i}
                            id={person.id} 
                            street={person.address.street}
                            lat={person.address.geo.lat} 
                            long={person.address.geo.lng}
                            name={person.name}
                            />  
                        )
                })
            }

            <Map coordinates={people}/>
        
            </div>
        </>
     );
}

export default CardList;


