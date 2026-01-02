import React from "react";
import ImageGallery from "./ImageGallery.jsx";
import PropertyTabs from "./PropertyTabs.jsx";

const PropertyDetails = ({property}) => {
    return (
        <div className="Property-Details">

            <ImageGallery picture={property.image} />

            <div className="Property-Header">
                <h2>${property.price.toLocaleString()}</h2>
                <p>{property.bedrooms} Bedroom {property.type}</p>
                <p>{property.location}</p>
            </div>

            <PropertyTabs property={property} />

        </div>
    );
}

export default PropertyDetails;