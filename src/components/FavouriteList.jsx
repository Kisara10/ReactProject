import React from "react";

const FavouriteList = ({favourites, onRemove, onClear}) => {
    return (
        <div className="Favourites-sidebar">
            <h2>
                My Favourites
                <span className="badge">{favourites.length}</span>
            </h2>

            <div className="favourites-list">
                {favourites.length === 0 ? (
                    <div className="empty-list">
                        <p>No Favourites yet</p>
                        <p>Click the heart icon to save properties</p>
                    </div>
                ):(
                    favourites.map((property) => (
                        <div key={property.id} className="favourite-item">
                            <span>
                                {property.name} Name {property.bedrooms} Bed {property.type} - ${property.price.toLocaleString()}
                            </span>
                            <span
                                className="remove-icon"
                                onClick={() => onRemove(property.id)}>
                                X
                            </span>
                        </div>
                    ))
                )}
            </div>

            <button
                className="btn-clear"
                onClick={onClear}
                disabled={favourites.length === 0}>     {/*Disables when favourite array is empty*/}
                Clear All Favourites
            </button>
        </div>
    );
}

export default FavouriteList;