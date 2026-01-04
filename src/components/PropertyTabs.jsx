import React, {useState} from "react";
import {Link} from "react-router-dom";

const PropertyTabs = ({property}) => {
    const [activeTab, setActiveTab] = useState("description");

    return (
        <div className="property-tabs">

            <Link to="/" className="back-link">Back to Search</Link>

            <div className="property-header">
                <h2>£{property.price.toLocaleString()}</h2>
                <p>{property.bedrooms} Bedroom {property.type}</p>
            </div>

            <div className="Tab-buttons">
                <button onClick={() => setActiveTab("description")}>Description</button>
                <button onClick={() => setActiveTab("details")}>Details</button>
                <button onClick={() => setActiveTab("location")}>Location</button>
                <button onClick={() => setActiveTab("floorplan")}>FloorPlan</button>
            </div>

            <div className="tab-content">
                {activeTab === "description" && (
                    <p>{property.description}</p>
                )}

                {activeTab === "details" && (
                    <ul>
                        <li>Type: {property.type}</li>
                        <li>Bedrooms: {property.bedrooms}</li>
                        <li>Tenure: {property.tenure}</li>
                        <li>
                            Added: {property.added.day} {property.added.month} {property.added.year}
                        </li>
                    </ul>
                )}

                {activeTab === "location" && (
                    <div className="map-location">
                        <iframe
                            title="Google Map"
                            width="100%"
                            height="300"
                            style={{border: 0, borderRadius: "12px"}}
                            loading="lazy"
                            allowFullScreen
                            src={`https://www.google.com/maps?q=${property.coordinates.lat},${property.coordinates.lng}&z=15&output=embed`}>

                        </iframe>
                    </div>
                )}

                {activeTab === "floorplan" && (
                    <div className="floorplan">
                        <img src={property.floorplan} alt="Property floorplan"
                        style={{width:'100%', borderRadius:'12px'}}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PropertyTabs;