import React, {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";
import ImageGallery from "./ImageGallery.jsx";
import PropertyTabs from "./PropertyTabs.jsx";

const PropertyDetails = () => {

    const {id} = useParams();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        fetch("/properties(1).json")
        .then(res => res.json())
        .then(data => {
            const found = data.properties.find(p => p.id === id);
            setProperty(found);
        });
    },[id]);

    if (!property) {
        return <p>Loading Property..</p>;
    }
    return (

        <div className="property-details">

            <ImageGallery picture={property.picture} />

            <PropertyTabs property={property} />
        </div>

    );
}

export default PropertyDetails;