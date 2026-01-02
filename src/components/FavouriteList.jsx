import React from "react";

const FavouriteList = ({favourites, onRemove, onClear}) => {
    return (
        <div className="Favourite-List">
            <h3>My Favourites ({favourites.length})</h3>

            {favourites.length === 0 && <p>No Favourites</p>}

            {favourites.map(property => (
                <div key={property.id}>
                    <span>
                        {property.bedrooms} Bed {property.type} ${property.price.toLocaleString()}
                    </span>
                    <button onClick={() => onRemove(property.id)}>Remove</button>
                </div>
            ))}

            {favourites.length > 0 && (
                <button onClick={onClear}>Clear All</button>
            )}
        </div>
    );
}

export default FavouriteList;