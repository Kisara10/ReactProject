import React from "react";

const PropertyCard = ({property, onAddToFavourites}) => {

    return(
        <div className="Propertycard">

            <img src={property.picture[0]} alt="property" />

            <h3>${property.price.toLocaleString()}</h3>
            <p>{property.bedrooms} Bedroom {property.type}</p>
            <p>{property.location}</p>

            <button onClick={() => onAddToFavourites(property)}>
                Add to Favourites
            </button>

        </div>
    );
}

export default PropertyCard;