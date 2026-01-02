import React from "react";
import ImageGallery from "./ImageGallery.jsx";
import PropertyTabs from "./PropertyTabs.jsx";

const PropertyDetails = ({property}) => {
    return (

        <div className="Property-Details">
            <ImageGallery picture={property.picture} />
            <PropertyTabs property={property} />
        </div>

    );
}

export default PropertyDetails;