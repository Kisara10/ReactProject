import React, {useState} from "react";

const PropertyTabs = ({property}) => {
    const [activeTab, setActiveTab] = useState("description");

    return (
        <div className="property-tabs">

            <div className="Tab-buttons">
                <button onClick={() => setActiveTab("description")}>Description</button>
                <button onClick={() => setActiveTab("details")}>Details</button>
                <button onClick={() => setActiveTab("location")}>Location</button>
            </div>

            <div className="Tab-content">
                {activeTab === "description" && (
                    <p>{property.description}</p>
                )}

                {activeTab === "details" && (
                    <ul>
                        <li>Type: {property.type}</li>
                        <li>Bedrooms: {property.bedrooms}</li>
                        <li>Tenure: {property.tenure}</li>
                        <li>
                            Added: {property.added.day} {property.added.month} {property.add.year}
                        </li>
                    </ul>
                )}

                {activeTab === "location" && (
                    <p>{property.location}</p>
                )}
            </div>
        </div>
    );
};

export default PropertyTabs;