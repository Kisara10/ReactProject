import React from "react";
import {Link} from "react-router-dom";

const PropertyCard = ({property, onAddToFavourites}) => {

    return(
        <div className="Property-card">

            <Link to={`/property/${property.id}`}>
                <img src={property.picture[0]} alt="property" />
            </Link>


            <div className="Property-card-content">
                <h3>${property.price.toLocaleString()}</h3>
                <p>{property.bedrooms} Bedroom {property.type}</p>
                <p>{property.location}</p>
            </div>

            <button onClick={() => onAddToFavourites(property)}>
                Add to Favourites
            </button>

            <Link to={`/property/${property.id}`}>
                <button className="btn-view">View Details</button>
            </Link>

        </div>
    );
}

export default PropertyCard;