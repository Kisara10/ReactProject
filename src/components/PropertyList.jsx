import React from "react";
import PropertyCard from "./PropertyCard.jsx";

const PropertyList = ({properties, onAddToFavourites}) => {

    return (
        <div className="PCard-list">
            <div className="results-side">
                <h2>Available Properties ({properties.length})</h2>
            </div>

            <div className="property-grid">
                {properties.map(property => (
                    <PropertyCard
                        key={property.id}
                        property={property}
                        onAddToFavourites={onAddToFavourites}
                    />
                ))}
            </div>

        </div>
    );
}

export default PropertyList;