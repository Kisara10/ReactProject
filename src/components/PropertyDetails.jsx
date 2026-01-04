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

        <div className="Property-Details">

            <Link to="/">Back to search</Link>
            <ImageGallery picture={property.picture} />
            <div className="Property-header">
                <h2>${property.price.toLocaleString()}</h2>
                <p>{property.bedrooms} Bedroom {property.type}</p>
                <p>{property.location}</p>
            </div>

            <PropertyTabs property={property} />
        </div>

    );
}

export default PropertyDetails;