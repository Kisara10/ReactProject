import React from "react";
import PropertyCard from "./PropertyCard.jsx";

const FavouriteList = ({favourites, onRemove, onClear}) => {

    if(favourites.length === 0){
        return <p>No favorties added yet</p>
    }
    return (
        <div className="favourite-list">
            <h3>My Favourites ({favourites.length})</h3>

            <div className="property-grid">
                {favourites.map(property => (
                    <div key={property.id} className="favourite-card">
                        <PropertyCard
                            property={property}
                            onAddToFavourites={()=>{}}/>

                        <button className="remove-btn"
                                onClick={() => onRemove(property.id)}>Remove</button>
                    </div>
                ))}
            </div>

            {favourites.length > 0 && (
                <button onClick={onClear}>Clear All</button>
            )}
        </div>
    );
}

export default FavouriteList;