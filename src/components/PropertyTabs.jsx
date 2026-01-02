import React, {useState} from "react";

const PropertyTabs = ({property}) => {
    const [activeTab, setActiveTab] = useState("description");

    return (
        <div className="property-tabs">

            <div className="TabButtons">
                <button onClick={() => setActiveTab("description")}>Description</button>
                <button onClick={() => setActiveTab("added")}>Details</button>
                <button onClick={() => setActiveTab("location")}>Location</button>
            </div>
        </div>
    )
}