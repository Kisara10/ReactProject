import React from "react";

const PropertyCard = ({property}) => {

    return(
        <div className="Propertycard">
            <div className="CardImage">
                <img src={property.image} alt={property.title} />
            </div>
            <div className="CardInfo">
                <h3 className="PropPrice">${property.price.toLocaleString()}</h3>  {/*to make number readable*/}
                <h4>{property.bedrooms} Bedroom {property.type}</h4>
                <p className="popLocation">{property.location}</p>

                <div className="CardDetails">
                    <span>🛏 {property.bedrooms} beds</span>
                    <span>🏠 {property.type}</span>
                </div>

                <button className="btn-view">View Details</button>

            </div>
        </div>
    );
}

export default PropertyCard;